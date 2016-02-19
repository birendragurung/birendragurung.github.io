export default function SectionHead({ idx, title }) {
  return (
    <div className="flex items-baseline gap-4 mb-[44px]">
      <span className="font-mono text-[13px] text-accent font-medium pt-1">{idx}</span>
      <h2 className="font-display text-[clamp(28px,3.6vw,40px)] leading-[1.05] tracking-[-0.02em] m-0 font-semibold">
        {title}
      </h2>
      <span className="flex-1 h-px bg-line self-center mt-1.5"></span>
    </div>
  );
}
