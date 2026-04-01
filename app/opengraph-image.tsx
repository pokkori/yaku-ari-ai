import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = '脈あり解読AI — LINEの返信から本音を解読';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ background: 'linear-gradient(135deg,#1a0535 0%,#2d1b69 50%,#1a0535 100%)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: 52, fontWeight: 'bold', color: '#ff6b9d', marginBottom: 16 }}>脈あり解読AI</div>
      <div style={{ fontSize: 28, color: '#e0c3fc', textAlign: 'center', maxWidth: 900 }}>LINEの返信から本音を解読。気になるあの人の気持ちを分析</div>
      <div style={{ position: 'absolute', bottom: 40, right: 60, fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>yaku-ari-ai.vercel.app</div>
    </div>
  );
}
