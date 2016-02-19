import { WRAP, CHIP, SEC } from './styles';
import SectionHead from './SectionHead';
import ProjectCard from './ProjectCard';

const SMALL_PROJECTS = [
  {
    kicker: 'api · service',
    title: 'Project two',
    desc: 'What it does and the role you played. Keep it to a sentence or two.',
    tech: ['Node', 'React', 'Postgres'],
    img: 'images/project-2.png',
    alt: 'Project two screenshot placeholder',
  },
  {
    kicker: 'tooling · python',
    title: 'Project three',
    desc: 'A third project or open-source thing you’re proud of.',
    tech: ['Python', 'Docker'],
    img: 'images/project-3.png',
    alt: 'Project three screenshot placeholder',
  },
];

const LINK = 'font-mono text-[13px] text-ink-soft inline-flex items-center gap-1.5 transition-colors hover:text-accent';

export default function Work() {
  return (
    <section id="work" className={SEC}>
      <div className={WRAP}>
        <SectionHead idx="03" title="Selected work" />
        <div className="flex flex-col gap-[22px]">

          {/* featured */}
          <article className="grid grid-cols-1 min-[820px]:grid-cols-[1.15fr_1fr] bg-surface border border-line rounded-card-lg overflow-hidden transition-[border-color,box-shadow,transform] duration-[250ms] hover:border-line-strong hover:shadow-[var(--shadow-md)] hover:-translate-y-[3px]">
            <div className="relative min-h-[300px] bg-surface-2 border-b min-[820px]:border-b-0 min-[820px]:border-r border-line">
              {/* TODO: replace with <img src="/images/project-1.png" alt="Project one screenshot" /> */}
              <div className="img-slot w-full h-full min-h-[300px] flex items-center justify-center text-center font-mono text-[12px] leading-[1.7] text-ink-faint" role="img" aria-label="Project one screenshot placeholder">
                <span className="p-[14px]">add screenshot<br /><code className="text-ink-soft">images/project-1.png</code></span>
              </div>
            </div>
            <div className="py-[34px] px-9 flex flex-col">
              <div className="font-mono text-[12px] text-ink-faint mb-[14px] flex gap-2.5 items-center"><b className="text-accent font-medium">featured</b> · web app</div>
              <h3 className="font-display text-[27px] font-semibold m-0 mb-3 tracking-[-0.01em]">Project one</h3>
              <p className="m-0 mb-5 text-ink-soft text-[16.5px] max-w-[48ch]">A short, honest description of what this project does, who it&apos;s for, and the problem it solves. Swap in your real project — what you built and why it mattered.</p>
              <div className="flex flex-wrap gap-[7px] mt-auto">
                <span className={CHIP}>Laravel</span><span className={CHIP}>Vue</span><span className={CHIP}>MySQL</span>
              </div>
              <div className="flex gap-2.5 mt-[22px]">
                <a href="#" className={LINK}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg> Live</a>
                <a href="https://github.com/birendragurung" target="_blank" rel="noopener" className={LINK}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7 0-.7 0-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 5.5 18.3 5.8 18.3 5.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" /></svg> Code</a>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 min-[820px]:grid-cols-2 gap-[22px]">
            {SMALL_PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
