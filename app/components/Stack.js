import { WRAP, CHIP, CI, CI_SVG, SEC } from './styles';
import SectionHead from './SectionHead';

const ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const LBL = 'font-mono text-[12px] text-ink-faint lowercase mb-3 tracking-[0.03em]';

const TIMELINE = [
  { when: '2022 — present', role: 'Senior Developer', co: 'Company three · full-stack, leading delivery' },
  { when: '2019 — 2022', role: 'Full-stack Developer', co: 'Company two · product & platform work' },
  { when: '2017 — 2019', role: 'Web Developer', co: 'Company one · where it all started' },
];

const TL_ITEM =
  "relative pb-[26px] last:pb-0 before:content-[''] before:absolute before:-left-[25px] before:top-1.5 before:w-[11px] before:h-[11px] before:rounded-full before:bg-bg before:border-2 before:border-accent";

export default function Stack() {
  return (
    <section id="stack" className={SEC}>
      <div className={WRAP}>
        <SectionHead idx="04" title="Stack & experience" />
        <div className="grid grid-cols-1 gap-12 min-[820px]:grid-cols-2 min-[820px]:gap-16">
          <div>
            <div className="mb-[26px]">
              <div className={LBL}>// backend</div>
              <div className="flex flex-wrap gap-2">
                <span className={CHIP}><img className={CI} src={`${ICON}/laravel/laravel-original.svg`} width="15" height="15" alt="" />Laravel</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/nodejs/nodejs-original.svg`} width="15" height="15" alt="" />Node.js</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/python/python-original.svg`} width="15" height="15" alt="" />Python</span>
                <span className={CHIP}><svg className={CI_SVG} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" /><rect x="2" y="17" width="12" height="4" rx="1" /></svg>REST</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/graphql/graphql-plain.svg`} width="15" height="15" alt="" />GraphQL</span>
              </div>
            </div>
            <div className="mb-[26px]">
              <div className={LBL}>// frontend</div>
              <div className="flex flex-wrap gap-2">
                <span className={CHIP}><img className={CI} src={`${ICON}/react/react-original.svg`} width="15" height="15" alt="" />React</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/vuejs/vuejs-original.svg`} width="15" height="15" alt="" />Vue</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/typescript/typescript-original.svg`} width="15" height="15" alt="" />TypeScript</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/tailwindcss/tailwindcss-original.svg`} width="15" height="15" alt="" />Tailwind</span>
              </div>
            </div>
            <div className="mb-[26px]">
              <div className={LBL}>// data &amp; infra</div>
              <div className="flex flex-wrap gap-2">
                <span className={CHIP}><img className={CI} src={`${ICON}/mysql/mysql-original.svg`} width="15" height="15" alt="" />MySQL</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/postgresql/postgresql-original.svg`} width="15" height="15" alt="" />PostgreSQL</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/redis/redis-original.svg`} width="15" height="15" alt="" />Redis</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/docker/docker-original.svg`} width="15" height="15" alt="" />Docker</span>
                <span className={CHIP}><svg className={CI_SVG} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" /></svg>AWS</span>
              </div>
            </div>
            <div>
              <div className={LBL}>// tools</div>
              <div className="flex flex-wrap gap-2">
                <span className={CHIP}><img className={CI} src={`${ICON}/git/git-original.svg`} width="15" height="15" alt="" />Git</span>
                <span className={CHIP}><img className={CI} src={`${ICON}/linux/linux-original.svg`} width="15" height="15" alt="" />Linux</span>
                <span className={CHIP}><svg className={CI_SVG} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>CI/CD</span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pl-[26px] before:content-[''] before:absolute before:left-[5px] before:top-1.5 before:bottom-1.5 before:w-[1.5px] before:bg-line-strong">
              {TIMELINE.map((t) => (
                <div key={t.when} className={TL_ITEM}>
                  <div className="font-mono text-[12px] text-ink-faint mb-1">{t.when}</div>
                  <div className="font-display text-[19px] font-semibold tracking-[-0.01em]">{t.role}</div>
                  <div className="text-ink-soft text-[15px]">{t.co}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
