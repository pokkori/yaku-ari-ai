"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    const sessionId = params.get("session_id");
    if (!sessionId) { setStatus("error"); return; }
    fetch(`/api/stripe/verify?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((d) => setStatus(d.ok ? "ok" : "error"));
  }, [params]);

  if (status === "loading") return <p className="text-rose-400">確認中...</p>;
  if (status === "error") return <p className="text-red-400">確認できませんでした。サポートへお問い合わせください。</p>;

  return (
    <div className="text-center">
      <svg className="w-16 h-16 text-pink-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <h1 className="text-3xl font-black mb-4">プレミアム登録完了！</h1>
      <p className="text-rose-300 mb-8">これからは無制限に脈あり解読できます。</p>
      <Link href="/tool" className="bg-pink-500 hover:bg-pink-400 text-white font-black text-lg px-10 py-4 rounded-xl transition">
        さっそく解読する →
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-rose-950 text-white flex items-center justify-center px-4">
      <Suspense fallback={<p className="text-rose-400">読み込み中...</p>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
