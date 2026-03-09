import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "脈あり解読AI | LINEをAIが本気で分析";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a0a1e 0%, #3d0a3f 50%, #1a0a1e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 16 }}>💗</div>
        <div style={{ fontSize: 52, fontWeight: 700, color: "#f9a8d4", marginBottom: 16, textAlign: "center" }}>
          脈あり解読AI
        </div>
        <div style={{ fontSize: 28, color: "#fbcfe8", textAlign: "center", maxWidth: 900 }}>
          彼からのLINEをコピペするだけ
        </div>
        <div style={{ fontSize: 24, color: "#f472b6", marginTop: 12, textAlign: "center" }}>
          脈あり度・心理分析・返信例文を即生成 ✨
        </div>
        <div
          style={{
            marginTop: 40,
            padding: "12px 32px",
            background: "#ec4899",
            borderRadius: 40,
            fontSize: 22,
            color: "#fff",
            fontWeight: 600,
          }}
        >
          3回無料で試す
        </div>
      </div>
    ),
    { ...size }
  );
}
