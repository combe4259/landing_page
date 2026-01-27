"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-gray-900/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-gray-200/80 before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <a className="text-gray-600 transition hover:text-gray-900 px-1" href="#features">
                  주요 기능
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900 px-1" href="#how-it-works">
                  이용 방법
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900 px-1" href="#stats">
                  신뢰 지표
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition hover:text-gray-900 px-1" href="#testimonials">
                  이용 후기
                </a>
              </li>
            </ul>
          </nav>

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="#cta"
                className="btn-sm bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                사전 등록
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
