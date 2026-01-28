"use client";

import PhoneMockup from "@/components/phone-mockup";

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="pb-5 text-4xl font-bold text-gray-900 md:text-6xl"
              data-aos="fade-up"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              소중한 가족의
              <br />
              <span className="text-blue-500">고액 거래</span>를<br />
              함께 지켜드려요
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-600 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
              >
                큰 금액 거래 시 인지 확인 퀴즈와 실시간 보호자 알림으로
                <br className="hidden sm:block" />
                금융 피해를 예방합니다
              </p>
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#cta"
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag("event", "generate_lead", {
                        event_category: "Hero",
                        event_label: "pre_register_button",
                      });
                    }
                  }}
                >
                  <span className="relative inline-flex items-center">
                    사전 등록하기
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
                <a
                  className="btn w-full bg-gray-200 text-gray-800 hover:bg-gray-300 sm:ml-4 sm:w-auto"
                  href="#features"
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag("event", "select_content", {
                        content_type: "button",
                        content_id: "learn_more_button",
                      });
                    }
                  }}
                >
                  자세히 알아보기
                </a>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            className="relative mx-auto max-w-[335px] sm:max-w-[375px] lg:max-w-[415px]"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <PhoneMockup src="/screens/01-landing.html" title="가디언 프로텍트 앱 미리보기" />
            {/* Floating toast notifications */}
            <div className="absolute -left-40 top-16 hidden lg:block" data-aos="fade-right" data-aos-delay={800}>
              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md" style={{ minWidth: "220px" }}>
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">고액 이체 감지됨</p>
                  <p className="mt-0.5 text-xs text-gray-500">500만원 이체 시도 · 보호자 확인 요청</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-44 bottom-28 hidden lg:block" data-aos="fade-left" data-aos-delay={1200}>
              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md" style={{ minWidth: "220px" }}>
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">보호자 승인 완료</p>
                  <p className="mt-0.5 text-xs text-gray-500">김○○ 보호자가 거래를 승인했습니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
