export default function Testimonials() {
  const testimonials = [
    {
      content: "어머니가 큰 돈을 보이스피싱에 보내실 뻔했는데, 인지 확인 퀴즈 덕분에 거래가 멈추고 제가 바로 확인할 수 있었어요. 정말 감사합니다.",
      name: "김지현",
      role: "보호자 (40대 딸)",
      stars: 5,
    },
    {
      content: "아버지께서 치매 초기 진단을 받으신 후 항상 불안했는데, 이 서비스로 고액 거래가 있을 때마다 알림을 받으니 마음이 놓여요.",
      name: "이승호",
      role: "보호자 (50대 아들)",
      stars: 5,
    },
    {
      content: "퀴즈가 어렵지 않아서 좋아요. 제가 보내는 게 맞는지 한번 더 생각해볼 수 있으니까. 자녀들도 안심하고 좋다고 하더라구요.",
      name: "박순자",
      role: "보호 대상자 (70대)",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.200),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-gray-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-gray-400/50">
              <span className="inline-flex bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                ✦ 이용 후기
              </span>
            </div>
            <h2
              className="pb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              가족들의 이야기
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              케어페이플러스를 사용한 가족들의 실제 후기입니다
            </p>
          </div>

          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="relative rounded-2xl bg-white p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-200/80 before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
