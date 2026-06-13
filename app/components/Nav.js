'use client';

import { useEffect, useRef, useState } from 'react';
import { WRAP } from './styles';

const LINK =
  "relative font-mono text-[13px] text-ink-soft py-1 transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-accent after:transition-[width] after:duration-[250ms] after:ease-[var(--ease)] hover:after:w-full";

const MOBILE_LINK =
  'font-mono text-[14px] text-ink-soft py-3 border-b border-line transition-colors hover:text-ink';

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#work', label: 'work' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu if the viewport grows past the breakpoint
  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > 680) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    document.body.classList.toggle('light', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="nav sticky top-0 z-50 border-b border-transparent backdrop-blur-[14px] backdrop-saturate-[1.4] bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)] transition-[border-color,background] duration-300"
      id="nav"
      ref={navRef}
    >
      <div className={`${WRAP} flex items-center gap-[18px] h-[68px]`}>
        <a href="#top" className="group flex items-center gap-[11px]" onClick={closeMenu}>
          <span className="grid place-items-center shrink-0 w-[34px] h-[34px] rounded-[9px] bg-accent text-accent-ink font-display text-[13px] font-bold tracking-[0.03em] shadow-[0_2px_8px_rgba(39,86,230,0.28)] transition-[box-shadow,transform] duration-200 group-hover:scale-[1.07] group-hover:shadow-[0_4px_16px_rgba(39,86,230,0.38)]">
            BG
          </span>
          <span className="flex items-baseline gap-[5px] font-sans text-[15px] font-semibold tracking-[-0.01em] text-ink">
            <span className="text-ink">Birendra</span> <span className="text-ink-soft font-normal max-[400px]:hidden">Gurung</span>
          </span>
        </a>
        <div className="flex items-center gap-[18px] ml-auto">
          <nav className="hidden min-[681px]:flex gap-[26px] items-center">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={LINK}>{l.label}</a>
            ))}
            <a
              href="#"
              className="ml-[6px] font-mono text-[12.5px] font-medium px-[14px] py-[6px] rounded-[8px] border border-accent bg-transparent text-accent transition-[background,color] duration-200 hover:bg-accent hover:text-accent-ink"
            >
              Download CV
            </a>
          </nav>
          <button
            className="appearance-none border border-line-strong bg-surface text-ink w-9 h-9 rounded-[9px] cursor-pointer grid place-items-center transition duration-200 hover:border-accent hover:text-accent"
            id="themeBtn"
            aria-label="Toggle theme"
            title="Toggle light / dark"
            onClick={toggleTheme}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
            </svg>
          </button>
          <button
            className="min-[681px]:hidden appearance-none border border-line-strong bg-surface text-ink w-9 h-9 rounded-[9px] cursor-pointer grid place-items-center transition duration-200 hover:border-accent hover:text-accent"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobileNav"
        className={`min-[681px]:hidden overflow-hidden border-b transition-[max-height,border-color] duration-300 ease-[var(--ease)] ${
          menuOpen ? 'max-h-[280px] border-line' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className={`${WRAP} flex flex-col py-1`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={MOBILE_LINK} onClick={closeMenu}>
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="font-mono text-[13px] font-medium mt-3 mb-3 px-[14px] py-[10px] rounded-[8px] border border-accent bg-transparent text-accent text-center transition-[background,color] duration-200 hover:bg-accent hover:text-accent-ink"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
