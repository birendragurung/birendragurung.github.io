import { WRAP, TAG, SEC } from './styles';
import SectionHead from './SectionHead';

const TAGS = ['full-stack', '8+ years', 'api design', 'clean code', 'remote-friendly'];

const PARA = 'm-0 mb-[18px] text-ink-soft text-[18px] max-w-[54ch] [&_strong]:text-ink [&_strong]:font-semibold';

export default function About() {
  return (
    <section id="about" className={SEC}>
      <div className={WRAP}>
        <SectionHead idx="01" title="About" />
        <div className="grid grid-cols-1 gap-9 min-[820px]:grid-cols-[1.4fr_0.9fr] min-[820px]:gap-[54px] items-start">
          <div>
            <p className={PARA}>I&apos;m a full-stack web developer who has spent the last <strong>8+ years</strong> turning ideas into dependable products — the kind that quietly do their job, scale when they need to, and don&apos;t wake anyone up at 3am.</p>
            <p className={PARA}>I work comfortably across the stack: <strong>Laravel</strong> and <strong>Node</strong> on the server, <strong>Python</strong> for data and tooling, <strong>React</strong> and <strong>Vue</strong> on the front. I care about clean code, sensible architecture, and shipping things that actually hold up.</p>
            <p className={PARA}>Whether it&apos;s a full-time role or a contract project, I like working with people who sweat the details.</p>
            <div className="flex flex-wrap gap-2 mt-[26px]">
              {TAGS.map((t) => (
                <span key={t} className={TAG}>{t}</span>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center pt-4">
            <img
              className="img-slot w-[260px] h-[260px] max-[820px]:w-[220px] max-[820px]:h-[220px] rounded-full border-[3px] border-line shadow-[0_0_0_6px_var(--color-surface),var(--shadow-md)] overflow-hidden shrink-0 object-cover"
              src="/images/portrait.jpg"
              alt="Birendra Gurung"
              width={260}
              height={260}
            />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[18px] bg-surface border border-line-strong rounded-[12px] px-[14px] py-2.5 shadow-[var(--shadow-md)] font-mono text-[12px]">
              <b className="text-[20px] text-accent block leading-none font-display">8+</b> years building<br />for the web
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
