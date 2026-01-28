"use client";

import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export default function StickyCta() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctaSection = document.getElementById("cta");
    if (!ctaSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(ctaSection);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/xkorlggn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        if (window.gtag) {
          window.gtag("event", "generate_lead", {
            event_category: "CTA",
            event_label: "sticky_bar_submit",
          });
        }
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-emerald-500 shadow-[0_-4px_20px_rgba(16,185,129,0.3)]">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 px-4 py-4">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p
              className="text-sm font-semibold text-white"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              등록 완료! 출시 시 가장 먼저 알려드릴게요.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_-4px_20px_rgba(59,130,246,0.3)]">
        <div className="mx-auto max-w-3xl px-4 py-4">
          {/* 상단 혜택 문구 */}
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              사전등록 시 첫 3개월 무료
            </span>
            <span
              className="hidden text-sm text-blue-100 sm:inline"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              월 1,900원 →
              <span className="font-bold text-white"> 0원</span>
            </span>
          </div>
          {/* 입력 폼 */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              className="min-w-0 flex-1 rounded-xl border-0 bg-white/95 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="이메일 주소를 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            />
            <button
              type="submit"
              disabled={submitting}
              className="whitespace-nowrap rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg active:scale-95 disabled:opacity-60"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {submitting ? "등록 중..." : "무료 시작하기"}
            </button>
          </form>
          {error && (
            <p
              className="mt-2 text-center text-xs text-red-200"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              등록에 실패했습니다. 다시 시도해주세요.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
