"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.200),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-gray-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-gray-400/50">
              <span className="inline-flex bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                ✦ 신뢰 지표
              </span>
            </div>
            <h2
              className="pb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              숫자로 보는 케어페이플러스
            </h2>
          </div>

          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center" data-aos="fade-up">
              <div className="mb-2 text-4xl font-bold text-blue-500 md:text-5xl" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                <AnimatedNumber target={100} suffix="만+" />
              </div>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                치매 환자 수 (국내)
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={100}>
              <div className="mb-2 text-4xl font-bold text-emerald-500 md:text-5xl">
                <AnimatedNumber target={57} suffix="%" />
              </div>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                금융 피해 경험률
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
              <div className="mb-2 text-4xl font-bold text-amber-500 md:text-5xl">
                <AnimatedNumber target={20} suffix="만원" />
              </div>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                평균 피해 금액
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay={300}>
              <div className="mb-2 text-4xl font-bold text-blue-500 md:text-5xl">
                24<span className="text-3xl">시간</span>
              </div>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                실시간 보호 모니터링
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
