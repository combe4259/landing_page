import PhoneMockup from "@/components/phone-mockup";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-600"
              data-aos="fade-up"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              안전한 금융 생활의 시작
            </div>
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
            {/* Floating badges */}
            <div className="absolute -left-16 top-20 hidden animate-bounce rounded-2xl bg-blue-500/10 border border-blue-500/20 p-3 backdrop-blur-sm lg:block" style={{ animationDuration: "3s" }}>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                실시간 보호
              </div>
            </div>
            <div className="absolute -right-20 bottom-32 hidden animate-bounce rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-3 backdrop-blur-sm lg:block" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2 text-sm text-emerald-700">
                <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                인지 확인 완료
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
