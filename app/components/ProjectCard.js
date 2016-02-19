import { CHIP } from './styles';

const SHELL =
  'bg-surface border border-line rounded-card-lg overflow-hidden transition-[border-color,box-shadow,transform] duration-[250ms] hover:border-line-strong hover:shadow-[var(--shadow-md)] hover:-translate-y-[3px]';

// Small project card (used in the two-up row under the featured project).
export default function ProjectCard({ kicker, title, desc, tech, img, alt }) {
  return (
    <article className={SHELL}>
      <div className="relative min-h-[200px] bg-surface-2 border-b border-line">
        {/* TODO: replace with <img src={`/${img}`} alt={title} /> */}
        <div className="img-slot w-full h-full min-h-[200px] flex items-center justify-center text-center font-mono text-[12px] leading-[1.7] text-ink-faint" role="img" aria-label={alt}>
          <span className="p-[14px]">add screenshot<br /><code className="text-ink-soft">{img}</code></span>
        </div>
      </div>
      <div className="py-[26px] px-7 flex flex-col">
        <div className="font-mono text-[12px] text-ink-faint mb-[14px] flex gap-2.5 items-center">{kicker}</div>
        <h3 className="font-display text-[22px] font-semibold m-0 mb-3 tracking-[-0.01em]">{title}</h3>
        <p className="m-0 mb-5 text-ink-soft text-[16.5px] max-w-[48ch]">{desc}</p>
        <div className="flex flex-wrap gap-[7px] mt-auto">
          {tech.map((t) => (
            <span key={t} className={CHIP}>{t}</span>
          ))}
        </div>
        <div className="flex gap-2.5 mt-[22px]">
          <a href="https://github.com/birendragurung" target="_blank" rel="noopener" className="font-mono text-[13px] text-ink-soft inline-flex items-center gap-1.5 transition-colors hover:text-accent">Code →</a>
        </div>
      </div>
    </article>
  );
}
