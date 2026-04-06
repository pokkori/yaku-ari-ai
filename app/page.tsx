export default function DiscontinuedPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#111",
      color: "#fff",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "2rem",
    }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg></div>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.75rem" }}>
        このサービスは廃止されました
      </h1>
      <p style={{ color: "#aaa", marginBottom: "2rem", maxWidth: "400px" }}>
        脈あり解読AIは、より高機能な「告白LINE返信AI」に統合されました。
      </p>
      <a
        href="https://kokuhaku-line-ai.vercel.app"
        style={{
          background: "#e91e8c",
          color: "#fff",
          padding: "0.75rem 2rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        告白LINE返信AIを使う →
      </a>
    </main>
  );
}
