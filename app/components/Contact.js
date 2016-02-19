import { WRAP, BTN, SEC } from './styles';

const PATH = 'border border-line rounded-card py-[22px] px-6 bg-surface-2 transition-[border-color,transform] duration-200 hover:border-line-strong hover:-translate-y-0.5';
const SOCIAL = 'w-[42px] h-[42px] border border-line-strong rounded-[11px] grid place-items-center text-ink-soft bg-surface transition duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5';

export default function Contact() {
  return (
    <section id="contact" className={SEC}>
      <div className={WRAP}>
        <div className="relative overflow-hidden bg-surface border border-line rounded-card-lg py-[54px] px-12 max-[680px]:py-[38px] max-[680px]:px-[26px]">
          <div className="dotgrid absolute inset-0 opacity-50 pointer-events-none bg-[length:26px_26px] [mask-image:radial-gradient(80%_120%_at_100%_0,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(80%_120%_at_100%_0,#000,transparent_70%)]"></div>
          <div className="relative z-[1]">
            <h2 className="font-display text-[clamp(30px,4.4vw,52px)] font-semibold tracking-[-0.02em] m-0 mb-2.5 max-w-[16ch]">Let&apos;s build something <span className="text-accent">solid</span>.</h2>
            <p className="text-ink-soft text-[18px] max-w-[50ch] m-0 mb-[34px]">Open to full-time roles and contract projects. Whichever you have in mind, the inbox is open.</p>
            <div className="grid grid-cols-1 min-[680px]:grid-cols-2 gap-[18px] max-w-[680px] mb-[38px]">
              <div className={PATH}>
                <div className="font-mono text-[12px] text-accent mb-2">// hiring?</div>
                <h4 className="font-display text-[18px] m-0 mb-1.5 font-semibold">For companies</h4>
                <p className="m-0 mb-4 text-ink-soft text-[15px]">Grab my résumé and let&apos;s set up a chat about the role.</p>
                <a href="#" className={BTN}>Download CV</a>
              </div>
              <div className={PATH}>
                <div className="font-mono text-[12px] text-accent mb-2">// got a project?</div>
                <h4 className="font-display text-[18px] m-0 mb-1.5 font-semibold">For clients</h4>
                <p className="m-0 mb-4 text-ink-soft text-[15px]">Tell me what you&apos;re building and what you need.</p>
              </div>
            </div>
            <div className="flex gap-[14px] items-center">
              <a href="https://github.com/birendragurung" target="_blank" rel="noopener" aria-label="GitHub" className={SOCIAL}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7 0-.7 0-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 5.5 18.3 5.8 18.3 5.8c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" /></svg></a>
              <a href="https://linkedin.com/in/birendra-gurung-007" target="_blank" rel="noopener" aria-label="LinkedIn" className={SOCIAL}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
