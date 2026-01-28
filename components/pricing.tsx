"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.gtag) {
          window.gtag("event", "view_pricing", {
            event_category: "Engagement",
            event_label: "pricing_section",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-gray-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-gray-400/50">
              <span className="inline-flex bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                ✦ 이용 요금
              </span>
            </div>
            <h2
              className="pb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              부담 없는 가격으로 시작하세요
            </h2>
            <p
              className="text-lg text-gray-700"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              소중한 가족의 금융 안전, 하루 63원이면 충분합니다
            </p>
          </div>

          {/* Pricing card */}
          <div className="mx-auto max-w-sm">
            <div className="relative rounded-3xl border border-blue-200 bg-white p-8 shadow-lg shadow-blue-500/10">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="inline-flex rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  사전등록 시 3개월 무료
                </span>
              </div>

              {/* Plan name */}
              <div className="pt-4 text-center">
                <p
                  className="text-sm font-medium text-blue-600"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  케어페이플러스
                </p>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span
                    className="text-5xl font-bold text-gray-900"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    1,900
                  </span>
                  <span
                    className="text-lg text-gray-500"
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  >
                    원/월
                  </span>
                </div>
                <p
                  className="mt-2 text-sm text-gray-500"
                  style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                >
                  부가세 포함
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-100" />

              {/* Features list */}
              <ul className="space-y-3">
                {[
                  "고액 거래 실시간 감지 및 알림",
                  "인지 확인 퀴즈 자동 실행",
                  "보호자 즉시 알림 연동",
                  "거래 내역 리포트 제공",
                  "가족 최대 3명 연결",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      className="text-sm text-gray-700"
                      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="#cta"
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-linear-to-t from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] transition-all hover:shadow-lg"
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                onClick={() => {
                  if (window.gtag) {
                    window.gtag("event", "select_content", {
                      content_type: "button",
                      content_id: "pricing_cta_click",
                    });
                  }
                }}
              >
                사전 등록하고 3개월 무료 받기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
