"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
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
              사전 등록하고
              <br />
              가장 먼저 시작하세요
            </h2>
            <p
              className="mb-8 text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay={200}
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              출시 알림과 얼리버드 혜택을 받아보세요
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
                    className="form-input flex-1 rounded-xl bg-white/50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 focus:border-blue-500 focus:ring-0"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                  />
                  <button
                    type="submit"
                    className="btn bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] whitespace-nowrap"
                  >
                    사전 등록
                  </button>
                </div>
                <p className="mt-4 text-xs text-gray-500" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  입력하신 이메일은 출시 알림 목적으로만 사용됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
