import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image className="max-w-none" src={FooterIllustration} width={1076} height={378} alt="" />
        </div>
        <div className="flex flex-col items-center gap-6 border-t py-8 [border-image:linear-gradient(to_right,transparent,theme(colors.gray.200),transparent)1] md:flex-row md:justify-between md:py-12">
          <Logo />
          <div className="text-sm text-gray-600" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            <p>&copy; 2025 케어페이플러스. All rights reserved.</p>
          </div>
          <div className="flex gap-4 text-sm" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            <a className="text-gray-600 transition hover:text-gray-800" href="#0">
              이용약관
            </a>
            <a className="text-gray-600 transition hover:text-gray-800" href="#0">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
