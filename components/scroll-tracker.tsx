"use client";

import { useEffect } from "react";

const SECTIONS = [
  { id: "features", label: "주요기능" },
  { id: "pricing", label: "가격" },
  { id: "cta", label: "사전등록" },
];

export default function ScrollTracker() {
  useEffect(() => {
    const tracked = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && !tracked.has(id)) {
            tracked.add(id);
            if (window.gtag) {
              window.gtag("event", "section_view", {
                event_category: "Scroll",
                event_label: id,
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
