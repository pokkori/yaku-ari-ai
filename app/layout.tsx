import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAdScript } from "@/components/GoogleAdScript";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const SITE_URL = "https://yaku-ari-ai.vercel.app";
const TITLE = "脈あり解読AI | LINEの文章をAIが本気で分析。脈あり度・心理・返信例文まで";
const DESC = "彼からのLINEをコピペするだけ。AIが脈あり度を0〜100%で判定し、彼の心理分析・返信例文・恋愛アドバイスまで生成。3回無料で試せる。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: "脈あり解読AI",
    locale: "ja_JP",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "脈あり解読AI — LINEの返信から本音を解読" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: [`${SITE_URL}/opengraph-image`],
  },
  metadataBase: new URL(SITE_URL),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "脈あり解読AIは無料で使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、登録不要で3回まで無料でお試しいただけます。4回目以降はプレミアムプランをご利用ください。"
      }
    },
    {
      "@type": "Question",
      "name": "AI診断の精度はどのくらいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最新のAI言語モデルが返信文のトーン・語尾・返信速度・絵文字使用パターンを総合的に分析します。ただし、AIによる解析はあくまで参考情報です。実際の感情を100%保証するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "どんな返信文を入力すればいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "気になる相手からのLINEやメッセージをそのままコピペして入力してください。長文・短文どちらでも分析できます。複数のやり取りを連続で入力すると精度が上がります。"
      }
    },
    {
      "@type": "Question",
      "name": "浮気チェックや既婚者の脈あり確認にも使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "パートナーや気になる相手のメッセージ分析に幅広くご利用いただけます。ただし、本サービスの結果はあくまでAIの推定であり、個人のプライバシーに配慮した形でご利用ください。"
      }
    },
    {
      "@type": "Question",
      "name": "脈あり度はどのように算出されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIが返信の文章量・返信速度の言及・質問の有無・絵文字・語尾のやわらかさ・話題の広げ方などを総合的に分析し、0〜100%のスコアで表示します。"
      }
    },
    {
      "@type": "Question",
      "name": "返信例文も生成してもらえますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、相手の心理分析をもとに、好印象を与えやすい返信例文を複数パターン生成します。そのまま使えるフレーズから応用例まで提案します。"
      }
    },
    {
      "@type": "Question",
      "name": "入力したLINEのメッセージは保存・利用されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "入力されたメッセージはAI分析のためのみに使用され、サーバーに永続保存されることはありません。プライバシーポリシーに従い安全に処理されます。"
      }
    },
    {
      "@type": "Question",
      "name": "片思い・復縁・マッチングアプリでも使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LINEやInstagram DM、マッチングアプリのメッセージなど、あらゆるテキストベースのやり取りに対応しています。片思い・復縁・新しい出会いの相手への対応確認に活用できます。"
      }
    },
    {
      "@type": "Question",
      "name": "スマホから使えますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、スマートフォン・タブレット・PCすべてに対応したレスポンシブデザインです。LINEアプリからそのままコピペして分析できます。"
      }
    },
    {
      "@type": "Question",
      "name": "恋愛アドバイスも受けられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "脈あり度・心理分析・返信例文に加えて、相手との関係を深めるための具体的な恋愛アドバイスもAIが生成します。次のデートへの誘い方や話題の広げ方まで提案します。"
      }
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className={`${geist.variable} ${notoSansJP.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAdScript />
      </body>
    </html>
  );
}
