type PhoneMockupProps = {
  src: string;
  title: string;
  scale?: number;
  className?: string;
};

export default function PhoneMockup({
  src,
  title,
  scale = 0.78,
  className,
}: PhoneMockupProps) {
  const phoneWidth = 430;
  const phoneHeight = 932;
  const scaledPhoneWidth = Math.round(phoneWidth * scale);
  const scaledPhoneHeight = Math.round(phoneHeight * scale);

  return (
    <div className={className}>
      <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-900 via-black to-zinc-800 p-[6px] shadow-[0_40px_90px_-45px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-24 hidden h-16 w-[3px] rounded-l-full bg-zinc-700 lg:block" />
        <div className="absolute -left-[3px] top-44 hidden h-10 w-[3px] rounded-l-full bg-zinc-700 lg:block" />
        <div className="absolute -right-[3px] top-36 hidden h-20 w-[3px] rounded-r-full bg-zinc-700 lg:block" />

        {/* Bezel */}
        <div className="relative rounded-[2.6rem] bg-zinc-900/90 p-[3px] shadow-inner shadow-black/40 ring-1 ring-white/10">
          {/* Dynamic island */}
          <div className="pointer-events-none absolute left-1/2 top-2.5 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black/85 shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
            <div className="absolute right-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-zinc-800 ring-2 ring-black/40" />
          </div>

          <div className="overflow-hidden rounded-[2.2rem] bg-white ring-1 ring-black/5">
            <div
              className="relative mx-auto overflow-hidden"
              style={{ width: `${scaledPhoneWidth}px`, height: `${scaledPhoneHeight}px` }}
            >
              <iframe
                src={src}
                className="origin-top-left border-0"
                style={{
                  width: `${phoneWidth}px`,
                  height: `${phoneHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  position: "absolute",
                  inset: 0,
                }}
                title={title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
