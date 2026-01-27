import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="케어페이플러스">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
        <svg
          className="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        케어페이플러스
      </span>
    </Link>
  );
}
