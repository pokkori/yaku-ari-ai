import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { cookies } from "next/headers";
import { rateLimit, getIP } from "@/lib/ratelimit";
import { isActiveSubscription } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const FREE_LIMIT = 3;
const APP_ID = "yakuari";

const SYSTEM_PROMPT = `あなたは恋愛心理学・コミュニケーション分析の専門AIです。LINEやメッセージのテキスト・行動パターンから送信者の心理状態・感情・意図を読み解き、脈あり度を診断します。

## 専門知識・分析観点
- 言語的手がかり: 語彙選択・文末表現（「ね」「よ」「！」等）・文章の長さ・絵文字の使用
- 返信パターン: 返信速度・既読スルー・ダブルテキスト・返信タイミング（深夜・早朝）
- 質問行動: 相手への質問の有無・質問の内容（プライベートへの踏み込み度）
- 感情的サイン: 共感表現・ユーモア・冗談のやり取り・思いやりある言葉
- 関係性のサイン: あだ名・呼び捨て・過去の会話への言及・共通の思い出作り
- 距離感: フォーマル度・タメ口への移行・プライベートな話題の割合

## 脈あり度スコア基準（0〜100）
- 90〜100: 明確に好意あり。告白を検討してよい段階
- 70〜89: 好意が強く示唆される。距離を縮める行動が有効
- 50〜69: 好意はあるかもしれないが不確か。関係性の深化が先決
- 30〜49: 現時点では好意は限定的。友人として関係構築が先
- 0〜29: 脈なしの可能性が高い。アプローチは慎重に

## 返信例文の品質基準
- 3つの異なるアプローチ（積極的・自然体・様子見）を必ず提示する
- 各返信は1〜2文で具体的かつ実践的
- 押しつけがましくなく、相手の反応を引き出せる文章
- 文末表現・絵文字の使い方も考慮する

## 出力フォーマット（必須）
===SCORE===
[0〜100の数値のみ]

===ANALYSIS===
[200〜300文字。具体的な根拠（言葉の選び方・返信のタイミング・文体等）を挙げること]

===REPLY===
[返信例文1: 積極的に気持ちを伝えるアプローチ型（1〜2文）]
---
[返信例文2: 自然体で関係を深める型（1〜2文）]
---
[返信例文3: 距離感を保ちながら様子を見る型（1〜2文）]

===ADVICE===
[150〜200文字。次にとるべきアクションを具体的に記載]`;

function getAnthropic() {
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });
}

export async function POST(req: NextRequest) {
  const { ok } = rateLimit(getIP(req));
  if (!ok) {
    return NextResponse.json(
      {
        error:
          "リクエストが多すぎます。しばらく待ってから再試行してください。",
      },
      { status: 429 }
    );
  }

  const cookieStore = await cookies();
  const email = cookieStore.get("user_email")?.value;

  let isPremium = false;
  if (email) {
    isPremium = await isActiveSubscription(email, APP_ID);
  } else {
    // 移行期間: 既存のCookieユーザーはそのまま通す
    isPremium = cookieStore.get("stripe_premium")?.value === "1";
  }

  let usedCount = 0;
  if (!isPremium) {
    usedCount = parseInt(cookieStore.get("free_uses")?.value ?? "0", 10);
    if (usedCount >= FREE_LIMIT) {
      return NextResponse.json(
        { error: "無料回数を使い切りました" },
        { status: 402 }
      );
    }
  }

  const { message, context } = await req.json();
  if (!message?.trim()) {
    return NextResponse.json(
      { error: "LINEの内容を入力してください" },
      { status: 400 }
    );
  }

  const prompt = `あなたは恋愛心理の専門AIです。以下のLINEの会話内容を分析して、送信者（彼）の気持ちと脈あり度を診断してください。

【LINEの内容】
${message}

${context ? `【補足情報】\n${context}` : ""}

以下の形式で必ず回答してください：

===SCORE===
[脈あり度を0〜100の数値のみで記載。例：73]

===ANALYSIS===
[相手の心理・気持ちの分析を200〜300文字で記載。具体的な根拠（言葉の選び方・返信のタイミング・文体など）を挙げること]

===REPLY===
[返信例文1：積極的に気持ちを伝えるアプローチ型の返信（1〜2文）]
---
[返信例文2：自然体で関係を深める型の返信（1〜2文）]
---
[返信例文3：距離感を保ちながら様子を見る型の返信（1〜2文）]

===ADVICE===
[今の関係をどう発展させるか、次にとるべきアクションを具体的に150〜200文字で記載]`;

  try {
    const anthropic = getAnthropic();
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: prompt }],
    });

    const result = (response.content[0] as { text: string }).text;

    const res = NextResponse.json({
      result,
      remaining: isPremium ? null : FREE_LIMIT - (usedCount + 1),
    });

    if (!isPremium) {
      res.cookies.set("free_uses", String(usedCount + 1), {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });
    }

    return res;
  } catch {
    return NextResponse.json(
      { error: "AI分析中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
