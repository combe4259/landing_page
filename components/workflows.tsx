"use client";

import { useState } from "react";
import Spotlight from "@/components/spotlight";

function FlipCard({
  color,
  frontContent,
  backContent,
}: {
  color: "blue" | "emerald" | "amber";
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}) {
  const [flipped, setFlipped] = useState(false);

  const colorMap = {
    blue: {
      bg: "bg-blue-100/70",
      before: "before:bg-blue-500/80",
      after: "after:bg-blue-500",
    },
    emerald: {
      bg: "bg-emerald-100/70",
      before: "before:bg-emerald-500/80",
      after: "after:bg-emerald-500",
    },
    amber: {
      bg: "bg-amber-100/70",
      before: "before:bg-amber-500/80",
      after: "after:bg-amber-500",
    },
  };
  const c = colorMap[color];

  return (
    <div
      className="group/card h-full cursor-pointer"
      style={{ perspective: "1600px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full overflow-hidden rounded-2xl ${c.bg} p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full ${c.before} before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full ${c.after} after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100`}
      >
        <div
          className={`relative z-20 h-full transition-transform duration-600 ease-out lg:group-hover/card:[transform:rotateY(180deg)]`}
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {frontContent}
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default function Workflows() {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-gray-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-gray-400/50">
              <span className="inline-flex bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                ✦ 주요 기능
              </span>
            </div>
            <h2
              className="pb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                이렇게 보호해드려요
              </span>
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              고액 거래 시 3단계 안전 장치로 치매·인지저하 환자의 금융 자산을 보호합니다
            </p>
          </div>
          {/* Spotlight cards */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 - 인지 확인 퀴즈 */}
            <FlipCard
              color="blue"
              frontContent={
                <div
                  className="h-full overflow-hidden rounded-[inherit] border border-gray-200 bg-white"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-72 items-center justify-center bg-linear-to-br from-blue-500/15 via-blue-400/5 to-white px-4 py-6">
                    <div className="flex h-full w-full max-w-[280px] items-center justify-center rounded-[1.75rem] border border-blue-100/80 bg-white shadow-[0_20px_45px_-25px_rgba(59,130,246,0.45)] ring-1 ring-blue-100/60">
                      <div className="rounded-[1.25rem] bg-gradient-to-br from-blue-500/15 to-blue-400/5 p-7 ring-1 ring-blue-200/60">
                        <svg className="h-16 w-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      </div>
                      <div className="pointer-events-none absolute -left-3 top-4 rounded-full border border-blue-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                        인지 확인
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      인지 확인 퀴즈
                    </h3>
                    <p className="text-gray-800" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      큰 금액 거래 전, 간단한 확인 질문으로 본인의 의사를 확인하고 실수를 방지해요
                    </p>
                    <p className="mt-4 text-center text-xs text-blue-400 lg:hidden">탭하여 화면 미리보기</p>
                  </div>
                </div>
              }
              backContent={
                <div
                  className="absolute inset-0 h-full overflow-hidden rounded-[inherit] border border-blue-100 bg-white"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="flex h-full flex-col bg-linear-to-br from-blue-500/10 to-blue-400/5 p-6">
                    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
                      <div className="relative mx-auto" style={{ width: "300px", height: "520px" }}>
                        <iframe
                          src="/screens/10-patient-quiz.html"
                          title="인지 확인 퀴즈 화면"
                          className="border-0"
                          style={{
                            width: "430px",
                            height: "932px",
                            transform: "scale(0.697)",
                            transformOrigin: "top left",
                            position: "absolute",
                            inset: 0,
                          }}
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm font-medium text-blue-700">
                      인지 확인 퀴즈 화면
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-blue-400 lg:hidden">탭하여 돌아가기</div>
                </div>
              }
            />
            {/* Card 2 - 실시간 알림 */}
            <FlipCard
              color="emerald"
              frontContent={
                <div
                  className="h-full overflow-hidden rounded-[inherit] border border-gray-200 bg-white"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-72 items-center justify-center bg-linear-to-br from-emerald-500/15 via-emerald-400/5 to-white px-4 py-6">
                    <div className="flex h-full w-full max-w-[280px] items-center justify-center rounded-[1.75rem] border border-emerald-100/80 bg-white shadow-[0_20px_45px_-25px_rgba(16,185,129,0.45)] ring-1 ring-emerald-100/60">
                      <div className="rounded-[1.25rem] bg-gradient-to-br from-emerald-500/15 to-emerald-400/5 p-7 ring-1 ring-emerald-200/60">
                        <svg className="h-16 w-16 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                      </div>
                      <div className="pointer-events-none absolute -left-3 top-4 rounded-full border border-emerald-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm">
                        즉시 알림
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      실시간 알림
                    </h3>
                    <p className="text-gray-800" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      고액 거래 감지 시 보호자에게 즉시 푸시 알림을 보내 함께 확인할 수 있어요
                    </p>
                    <p className="mt-4 text-center text-xs text-emerald-400 lg:hidden">탭하여 화면 미리보기</p>
                  </div>
                </div>
              }
              backContent={
                <div
                  className="absolute inset-0 h-full overflow-hidden rounded-[inherit] border border-emerald-100 bg-white"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="flex h-full flex-col bg-linear-to-br from-emerald-500/10 to-emerald-400/5 p-6">
                    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
                      <div className="relative mx-auto" style={{ width: "300px", height: "520px" }}>
                        <iframe
                          src="/screens/08-guardian-notifications.html"
                          title="실시간 알림 화면"
                          className="border-0"
                          style={{
                            width: "430px",
                            height: "932px",
                            transform: "scale(0.697)",
                            transformOrigin: "top left",
                            position: "absolute",
                            inset: 0,
                          }}
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm font-medium text-emerald-700">
                      실시간 알림 화면
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-emerald-400 lg:hidden">탭하여 돌아가기</div>
                </div>
              }
            />
            {/* Card 3 - 가족 연동 */}
            <FlipCard
              color="amber"
              frontContent={
                <div
                  className="h-full overflow-hidden rounded-[inherit] border border-gray-200 bg-white"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-72 items-center justify-center bg-linear-to-br from-amber-500/15 via-amber-400/5 to-white px-4 py-6">
                    <div className="flex h-full w-full max-w-[280px] items-center justify-center rounded-[1.75rem] border border-amber-100/80 bg-white shadow-[0_20px_45px_-25px_rgba(245,158,11,0.45)] ring-1 ring-amber-100/60">
                      <div className="rounded-[1.25rem] bg-gradient-to-br from-amber-500/15 to-amber-400/5 p-7 ring-1 ring-amber-200/60">
                        <svg className="h-16 w-16 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="pointer-events-none absolute -left-3 top-4 rounded-full border border-amber-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-amber-600 shadow-sm">
                        안전 연결
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      가족 연동
                    </h3>
                    <p className="text-gray-800" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      믿을 수 있는 보호자와 안전하게 연결되어 거래 내역을 공유하고 관리해요
                    </p>
                    <p className="mt-4 text-center text-xs text-amber-400 lg:hidden">탭하여 화면 미리보기</p>
                  </div>
                </div>
              }
              backContent={
                <div
                  className="absolute inset-0 h-full overflow-hidden rounded-[inherit] border border-amber-100 bg-white"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="flex h-full flex-col bg-linear-to-br from-amber-500/10 to-amber-400/5 p-6">
                    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
                      <div className="relative mx-auto" style={{ width: "300px", height: "520px" }}>
                        <iframe
                          src="/screens/06-guardian-link.html"
                          title="가족 연동 화면"
                          className="border-0"
                          style={{
                            width: "430px",
                            height: "932px",
                            transform: "scale(0.697)",
                            transformOrigin: "top left",
                            position: "absolute",
                            inset: 0,
                          }}
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm font-medium text-amber-700">
                      가족 연동 화면
                    </p>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-amber-400 lg:hidden">탭하여 돌아가기</div>
                </div>
              }
            />
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
