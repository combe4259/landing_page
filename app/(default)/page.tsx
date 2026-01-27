export const metadata = {
  title: "케어페이플러스 - 고액 거래 보호 서비스",
  description:
    "치매·인지저하 환자의 고액 금융 거래를 보호하는 서비스",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Stats />
      <Testimonials />
      <Cta />
    </>
  );
}
