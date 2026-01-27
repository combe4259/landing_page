import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative" id="how-it-works">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="" />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.200),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-gray-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-gray-400/50">
              <span className="inline-flex bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                ✦ 이용 방법
              </span>
            </div>
            <h2
              className="pb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              간단한 3단계로 시작하세요
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              복잡한 설정 없이 빠르게 보호 서비스를 시작할 수 있습니다
            </p>
          </div>

          {/* Steps */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-3 md:gap-x-10 lg:gap-x-14">
            <article className="text-center" data-aos="fade-up">
              <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-blue-100/80 bg-white px-3 py-1 text-sm font-semibold shadow-sm">
                <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  1단계
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                회원가입
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                보호 대상자 또는 보호자로 역할을 선택하고 간편하게 가입하세요
              </p>
            </article>
            <article className="text-center" data-aos="fade-up" data-aos-delay={200}>
              <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-blue-100/80 bg-white px-3 py-1 text-sm font-semibold shadow-sm">
                <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  2단계
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                가족 연결
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                보호자와 보호 대상자를 초대 코드로 안전하게 연결하세요
              </p>
            </article>
            <article className="text-center" data-aos="fade-up" data-aos-delay={400}>
              <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-blue-100/80 bg-white px-3 py-1 text-sm font-semibold shadow-sm">
                <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  3단계
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                보호 시작
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                고액 거래 감지, 인지 확인 퀴즈, 실시간 알림이 자동으로 작동합니다
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
