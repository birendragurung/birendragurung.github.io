import { WRAP, SEC } from './styles';
import SectionHead from './SectionHead';

const MODES = [
  {
    kicker: '// full-time',
    title: 'Full-time roles',
    body: 'Looking for a senior full-stack engineer who can own features end-to-end, mentor, and raise the bar on quality? Let’s talk.',
    cta: 'See my CV',
  },
  {
    kicker: '// contract',
    title: 'Contract projects',
    body: 'Need an extra pair of senior hands to build, rescue, or ship a project? I take on focused contract work with clear scope.',
    cta: 'Start a project',
  },
];

const CARD =
  "group relative bg-surface border border-line rounded-card-lg pt-[30px] px-[30px] pb-[26px] overflow-hidden transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--shadow-md)] hover:border-line-strong before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-accent before:scale-y-0 before:origin-top before:transition-transform before:duration-300 before:ease-[var(--ease)] hover:before:scale-y-100";

export default function WorkWithMe() {
  return (
    <section id="work-with-me" className={SEC}>
      <div className={WRAP}>
        <SectionHead idx="02" title="How we can work together" />
        <div className="grid grid-cols-1 gap-5 min-[680px]:grid-cols-2">
          {MODES.map((m) => (
            <article key={m.kicker} className={CARD}>
              <div className="font-mono text-[12px] text-accent mb-[14px]">{m.kicker}</div>
              <h3 className="font-display text-[23px] font-semibold m-0 mb-2.5 tracking-[-0.01em]">{m.title}</h3>
              <p className="m-0 mb-[18px] text-ink-soft text-[16px]">{m.body}</p>
              <a href="#contact" className="font-mono text-[13px] text-ink inline-flex items-center gap-[7px] group-hover:text-accent">
                {m.cta} <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
