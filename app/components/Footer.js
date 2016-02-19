import { WRAP } from './styles';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line pt-[34px] pb-[46px]">
      <div className={`${WRAP} flex items-center gap-4 flex-wrap font-mono text-[12.5px] text-ink-faint`}>
        <span>© <span id="yr">{year}</span> Birendra Gurung</span>
        <span>·</span>
        <span>designed &amp; built with care</span>
        <a href="#top" className="ml-auto inline-flex items-center gap-[7px] cursor-pointer text-ink-soft hover:text-accent">back to top <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg></a>
      </div>
    </footer>
  );
}
