"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export default function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

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
            event_label: "final_pre_register_submit",
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

  return (
    <section className="relative overflow-hidden" id="cta">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-100/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="pb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              data-aos="fade-up"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              지금 사전 등록하면
              <br />
              <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">첫 3개월 무료</span>
            </h2>
            <p
              className="mb-3 text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay={200}
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              월 1,900원으로 가족의 금융 안전을 지키세요
            </p>
            <p
              className="mb-8 text-sm text-gray-500"
              data-aos="fade-up"
              data-aos-delay={300}
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              사전 등록자 한정 · 출시 후 자동 적용
            </p>

            {submitted ? (
              <div
                className="mx-auto max-w-md rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8"
                data-aos="fade-up"
              >
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                    <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-semibold text-emerald-700" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  등록이 완료되었습니다!
                </p>
                <p className="mt-2 text-sm text-emerald-600/80" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  출시 시 가장 먼저 알려드릴게요.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-md"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    className="form-input flex-1 rounded-xl bg-white/50 px-4 py-3 text-sm text-gray-800 placeholder-gray-600 border border-gray-300 focus:border-blue-500 focus:ring-0"
                    placeholder="이메일 입력 (관심도 분석 후 폐기)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] whitespace-nowrap disabled:opacity-60"
                  >
                    {submitting ? "등록 중..." : "사전 등록"}
                  </button>
                </div>
                {error && (
                  <p className="mt-3 text-sm text-red-500" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                    등록에 실패했습니다. 다시 시도해주세요.
                  </p>
                )}
                <p className="mt-4 text-xs text-gray-600 font-medium" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  💡 비용이 발생하지 않습니다. 사용자 관심도 분석 목적으로만 수집되며, 분석 후 폐기됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
