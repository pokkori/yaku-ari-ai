import type { Metadata } from "next";
import Link from "next/link";

interface KeywordData {
  title: string;
  h1: string;
  description: string;
  features: { icon: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
  lastUpdated: string;
}

export const KEYWORDS: Record<string, KeywordData> = {
  "myakuari-line-signs": {
    title: "脈あり LINEサイン 見極め方 | 脈あり解読AI",
    h1: "脈あり LINEサイン 見極め方",
    description: "LINEで脈ありかどうか判断できるサインを解説。AIが会話内容を分析して本音を解読します。",
    features: [
      { icon: "LINE", title: "LINE内容分析", text: "メッセージの言葉遣い・頻度・絵文字使用パターンからAIが脈あり度を判定" },
      { icon: "AI", title: "心理解析", text: "男女の心理パターンをAIが学習。返信速度・内容の変化を総合判断" },
      { icon: "Score", title: "スコア表示", text: "脈あり確率をパーセントで表示。アドバイスと改善ポイントも提案" },
    ],
    faqs: [
      { q: "LINEの脈ありサインとは？", a: "返信が早い、スタンプや絵文字が多い、質問が返ってくる、既読後すぐ返信などが代表的なサインです。AIはこれらを総合的に分析します。" },
      { q: "既読スルーは脈なし確定？", a: "必ずしもそうではありません。忙しさや返信タイミングによる場合も多く、AIは会話全体のパターンで総合判断します。" },
      { q: "どんな情報を入力すればいい？", a: "実際のLINEの文章、返信頻度、会話の流れなどを入力してください。情報が多いほど精度が上がります。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "kare-kioku-aru-sain": {
    title: "彼 気になる サイン 行動 | 脈あり解読AI",
    h1: "彼 気になる サイン 行動",
    description: "気になる彼の行動が脈ありかどうかを分析。目線・態度・言動からAIが本気度を解読します。",
    features: [
      { icon: "行動", title: "行動パターン分析", text: "目が合う頻度、近づいてくる距離感、会話の内容などから脈あり度を判断" },
      { icon: "心理", title: "男性心理解説", text: "男性特有の好意表現パターンをAIが解析。分かりにくいサインも見逃さない" },
      { icon: "助言", title: "具体的アドバイス", text: "現状の脈あり度に応じた次のアクションをAIが提案" },
    ],
    faqs: [
      { q: "男性の好意サインはわかりにくい？", a: "男性は好意を直接表現しない場合が多く、行動や態度に現れます。AIは細かなサインを総合的に判断します。" },
      { q: "片思いの状況でも使える？", a: "はい。片思いの段階でも相手の脈あり度や次のアプローチ方法をアドバイスできます。" },
      { q: "どんな行動を入力すればいい？", a: "会話時の態度、連絡頻度、共通の予定を誘う行動など、気になる彼の具体的な行動を入力してください。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "line-henshin-hayai-imi": {
    title: "LINE 返信 早い 男性心理 | 脈あり解読AI",
    h1: "LINE 返信 早い 男性心理",
    description: "LINEの返信が早い男性の心理を解説。脈ありサインかどうかAIが会話内容から判断します。",
    features: [
      { icon: "速度", title: "返信速度分析", text: "返信スピードのパターンをAIが分析。「既読後すぐ返信」「深夜でも反応」などを評価" },
      { icon: "文章", title: "文章内容チェック", text: "返信内容の質（質問があるか、話を広げるかなど）を総合判断" },
      { icon: "Score", title: "脈あり度スコア", text: "返信速度＋内容から脈あり確率をスコア化して表示" },
    ],
    faqs: [
      { q: "返信が早いのは脈あり？", a: "返信速度は脈ありの一つのサインですが、内容や継続性も重要です。AIは複数の要素を組み合わせて判断します。" },
      { q: "返信が遅くなった場合は？", a: "返信速度の変化も重要なサイン。以前より遅くなった場合の心理もAIが分析します。" },
      { q: "男性と女性で違いがある？", a: "男女で好意表現のパターンが異なります。AIは性別に応じた心理分析を行います。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "nanpa-myakuari-signs": {
    title: "好き サイン 男性 行動 | 脈あり解読AI",
    h1: "好き サイン 男性 行動",
    description: "男性が好きな人に見せる行動サインを解説。具体的な行動パターンからAIが脈あり度を診断します。",
    features: [
      { icon: "行動", title: "好意行動チェック", text: "食事・デートへの誘い、連絡頻度の増加、優しさの変化などを分析" },
      { icon: "心理", title: "心理パターン学習", text: "男性の恋愛心理をAIが学習。言葉では言わない本音を行動から読み解く" },
      { icon: "助言", title: "状況別アドバイス", text: "職場・友人関係・マッチングアプリなど状況に応じた判断と次の一手を提案" },
    ],
    faqs: [
      { q: "男性が好きな人にとる行動は？", a: "視線が合う、話しかける頻度が増える、個人的な話をする、助けようとするなどが代表的です。" },
      { q: "友達として優しい場合との違いは？", a: "友情と愛情の違いは微妙ですが、特定の人だけへの特別扱いや照れ・緊張の有無などで判断できます。AIが総合診断します。" },
      { q: "職場の気になる人にも使える？", a: "職場恋愛特有のサイン（仕事の相談をよく受ける・帰りのタイミングを合わせるなど）も考慮して分析します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "joshi-myakuari-behavior": {
    title: "脈あり 女性 行動 サイン | 脈あり解読AI",
    h1: "脈あり 女性 行動 サイン",
    description: "女性の脈ありサインを行動・言動から解説。AIが女性の本音を総合分析して脈あり度を診断します。",
    features: [
      { icon: "心理", title: "女性心理分析", text: "女性特有の好意表現（さりげない接触、話題への興味など）をAIが解析" },
      { icon: "会話", title: "会話パターン診断", text: "話の内容、質問の仕方、返事の温度感から脈あり度を判断" },
      { icon: "助言", title: "恋愛アドバイス", text: "現状から次のステップへの具体的なアプローチ方法を提案" },
    ],
    faqs: [
      { q: "女性の脈ありサインとは？", a: "よく目が合う、自分から話しかける、恋愛の話題を振る、ボディタッチが増えるなどが脈ありサインです。" },
      { q: "女性はわかりにくい？", a: "女性は感情表現が複雑な場合もありますが、行動パターンを総合的に見ると傾向が見えます。AIが客観的に判断します。" },
      { q: "脈なしの可能性もある？", a: "正直に脈なしの可能性も含めて診断します。早めに切り替えた方が良い場合もアドバイスします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "date-myakuari-check": {
    title: "デート 脈あり チェック 方法 | 脈あり解読AI",
    h1: "デート 脈あり チェック 方法",
    description: "デート中の相手の行動・態度から脈あり度をチェック。AIがデートの状況を分析して脈あり判断します。",
    features: [
      { icon: "行動", title: "デート行動分析", text: "デート中の態度・話題・次回の提案有無などをAIが総合評価" },
      { icon: "時間", title: "時間・距離チェック", text: "デートの長さ、帰り際の態度、別れ際の言葉などを分析" },
      { icon: "助言", title: "次の一手提案", text: "デート後のフォロー方法から告白のタイミングまでAIがアドバイス" },
    ],
    faqs: [
      { q: "デート中の脈ありサインは？", a: "食事中の目線、会話中の前傾姿勢、次回のデートを提案する、解散を惜しむなどが代表的です。" },
      { q: "デート後のLINEも重要？", a: "デート後の連絡速度・内容も重要な脈ありサインです。「楽しかった」のすぐ後の連絡は脈あり度が高いです。" },
      { q: "1回目と2回目で違いがある？", a: "デートを重ねるごとに脈あり度の変化を分析できます。関係の進展具合もAIが判断します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "line-kigou-kimochi": {
    title: "LINE 既読 スルー 心理 | 脈あり解読AI",
    h1: "LINE 既読 スルー 心理",
    description: "LINE既読スルーの心理を解説。脈なし確定？それとも脈ありのサイン？AIが状況を分析して判断します。",
    features: [
      { icon: "分析", title: "既読スルー分析", text: "既読後の返信遅延パターン・頻度を分析。単純な忙しさか、意図的な距離かを判断" },
      { icon: "評価", title: "関係性評価", text: "これまでの会話履歴と合わせて総合的な脈あり度を評価" },
      { icon: "助言", title: "対処法アドバイス", text: "既読スルーされた後の最適な対応方法をシチュエーション別に提案" },
    ],
    faqs: [
      { q: "既読スルーは脈なし？", a: "既読スルーが脈なしとは限りません。忙しい、返信に迷っている場合もあります。AIが会話全体のパターンで判断します。" },
      { q: "何時間で既読スルー確定？", a: "3時間以上の場合はスルーの可能性が高まりますが、相手の生活リズムも考慮が必要です。AIが状況を総合判断します。" },
      { q: "追撃LINEしていい？", a: "状況によります。AIが脈あり度を分析した上で、追撃すべきか待つべきかを具体的にアドバイスします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "myakuari-versus-kimai": {
    title: "脈あり 脈なし 違い 判断 | 脈あり解読AI",
    h1: "脈あり 脈なし 違い 判断",
    description: "脈ありと脈なしの違いを具体的に解説。AIが相手の行動・言動を分析して正確に判断します。",
    features: [
      { icon: "判定", title: "脈あり/なし判定", text: "複数のサインを総合的に分析。脈ありか脈なしかをAIが明確に判断" },
      { icon: "解説", title: "具体的な違い解説", text: "脈あり・脈なしの具体的な行動の違いを分かりやすく説明" },
      { icon: "改善", title: "状況改善アドバイス", text: "脈なしの場合の挽回方法や、より脈ありに近づくためのアクションを提案" },
    ],
    faqs: [
      { q: "脈ありと脈なしの一番の違いは？", a: "相手が自分に対して「特別扱い」をしているかどうかが最大の違いです。AIはこの特別扱いの有無を多角的に分析します。" },
      { q: "優しくされるのは脈あり？", a: "単純な優しさと好意からの優しさは異なります。AIが他の行動と合わせて判断します。" },
      { q: "脈なしから逆転できる？", a: "状況によっては逆転可能です。AIが現状を診断して、最も効果的な逆転アプローチを提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "sukinahito-line-check": {
    title: "好きな人 LINEの仕方 確認 | 脈あり解読AI",
    h1: "好きな人 LINEの仕方 確認",
    description: "好きな人へのLINEが脈ありにつながるか確認。AIが最適なLINEの送り方とタイミングをアドバイスします。",
    features: [
      { icon: "確認", title: "LINE内容チェック", text: "送る前に内容をAIに確認。相手の心理に響くメッセージか事前評価" },
      { icon: "時間", title: "送信タイミング分析", text: "相手の生活リズムや返信パターンを考慮した最適な送信タイミングを提案" },
      { icon: "進展", title: "関係進展サポート", text: "LINEを通じた関係の深め方、デートへの誘い方まで総合的にサポート" },
    ],
    faqs: [
      { q: "好きな人へのLINEはどう送る？", a: "相手が返信しやすい質問を含める、共通の話題を入れる、重くなりすぎない長さにするなどがポイントです。" },
      { q: "最初のLINEで何を送ればいい？", a: "共通の話題や出来事に触れた自然な内容がベスト。AIが相手の状況に合わせた最初のメッセージ例を提案します。" },
      { q: "毎日LINEしていい？", a: "頻度は相手の返信テンポに合わせるのが基本。AIが相手の脈あり度と合わせて最適な連絡頻度をアドバイスします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "kokuhaku-timing-myakuari": {
    title: "告白 タイミング 脈あり 判断 | 脈あり解読AI",
    h1: "告白 タイミング 脈あり 判断",
    description: "告白のベストタイミングを脈あり度から判断。AIが現状を分析して告白成功率を高める最適なタイミングを提案します。",
    features: [
      { icon: "診断", title: "告白タイミング診断", text: "現在の脈あり度から告白のベストタイミングをAIが判断" },
      { icon: "成功率", title: "成功率分析", text: "現状での告白成功確率を算出。準備が必要な場合はステップを提案" },
      { icon: "提案", title: "告白シナリオ提案", text: "どこで・どのように告白するかまで、状況に応じたシナリオを提案" },
    ],
    faqs: [
      { q: "告白のベストタイミングは？", a: "デートが楽しく終わった後、相手から連絡が増えてきた時、特別なイベントの前後などが成功率の高いタイミングです。" },
      { q: "まだ早い？それとも今がチャンス？", a: "AIが現在の脈あり度を分析して「今すぐ告白すべき」「もう少し待つべき」を明確に判断します。" },
      { q: "告白を断られた場合は？", a: "断られた後の関係修復方法や、友人関係を保ちながら再チャレンジする方法もAIがアドバイスします。" },
    ],
    lastUpdated: "2026-03-31",
  },
};

const ALL_SLUGS = Object.keys(KEYWORDS);

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = KEYWORDS[slug];
  if (!data) return { title: "Not Found" };

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      modifiedTime: data.lastUpdated,
      url: `https://myakuari-ai.vercel.app/keywords/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
    alternates: {
      canonical: `https://myakuari-ai.vercel.app/keywords/${slug}`,
    },
    other: {
      "article:modified_time": data.lastUpdated,
    },
  };
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = KEYWORDS[slug];

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>ページが見つかりません</h1>
          <Link href="/" style={{ color: "#f472b6" }}>トップページへ戻る</Link>
        </div>
      </div>
    );
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": data.lastUpdated,
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)", color: "#e2e8f0", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Hero */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <svg style={{ width: "3rem", height: "3rem", fill: "#f472b6", margin: "0 auto 1rem" }} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "bold", marginBottom: "1rem", background: "linear-gradient(90deg, #f472b6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {data.h1}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: "2rem" }}>{data.description}</p>
            <Link
              href="/"
              style={{ display: "inline-block", background: "linear-gradient(135deg, #f472b6, #a78bfa)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}
            >
              今すぐ無料で診断する →
            </Link>
          </div>

          {/* Features */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#f472b6" }}>AIが解読する3つのポイント</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {data.features.map((f, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(244,114,182,0.2)", borderRadius: "12px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "2rem" }}>{f.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#f472b6" }}>{f.title}</h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#f472b6" }}>よくある質問</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {data.faqs.map((faq, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(244,114,182,0.2)", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.75rem", color: "#f472b6", fontSize: "1rem" }}>Q: {faq.q}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginBottom: "3rem", padding: "2rem", background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.3)", borderRadius: "16px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#f472b6" }}>AIが本音を解読します</h2>
            <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>LINEや行動を入力するだけで、脈あり度をスコアで表示</p>
            <Link
              href="/"
              style={{ display: "inline-block", background: "linear-gradient(135deg, #f472b6, #a78bfa)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: "bold", textDecoration: "none" }}
            >
              無料で診断してみる →
            </Link>
          </div>

          {/* Last Updated */}
          <p style={{ textAlign: "center", color: "#475569", fontSize: "0.8rem", marginBottom: "2rem" }}>
            最終更新: {data.lastUpdated}
          </p>

          {/* Cross Sell */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
            <h3 style={{ textAlign: "center", color: "#94a3b8", marginBottom: "1rem" }}>他のAIツールも試してみる</h3>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="https://kokuhaku-line-ai.vercel.app" style={{ color: "#f472b6", textDecoration: "none", fontSize: "0.9rem" }}>告白LINE返信AI</Link>
              <Link href="https://konkatsu-ai.vercel.app" style={{ color: "#f472b6", textDecoration: "none", fontSize: "0.9rem" }}>婚活AI</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
