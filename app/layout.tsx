import "./css/style.css";

import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "케어페이플러스 - 고액 거래 보호 서비스",
  description:
    "치매·인지저하 환자의 고액 금융 거래를 보호하는 서비스. 인지 확인 퀴즈와 실시간 보호자 알림으로 금융 피해를 예방합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="contentsquare-script"
          strategy="beforeInteractive"
          src="https://t.contentsquare.net/uxa/6812e90f26dc4.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} bg-white font-inter text-base text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9FE4VRBVE8`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-9FE4VRBVE8');
          `}
        </Script>
      </body>
    </html>
  );
}
