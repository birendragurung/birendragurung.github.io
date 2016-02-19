'use client';

import { useEffect, useRef } from 'react';
import { WRAP, BTN, BTN_PRIMARY } from './styles';

const STACK_CODE = "'laravel', 'node', 'python', 'react', 'vue'";

// max distance (px) at which a particle links to the cursor
const MOUSE_DIST = 170;

const TERM_LINES = [
  { type: 'prompt', html: '$ whoami' },
  { type: 'plain', html: 'birendra — full-stack dev' },
  { type: 'blank' },
  { type: 'prompt', html: '$ git log --oneline -3' },
  { type: 'history', html: 'a3f91b&nbsp;ship auth module' },
  { type: 'history', html: 'd8c40e&nbsp;fix race condition' },
  { type: 'history', html: '7f2a9d&nbsp;add CI pipeline' },
  { type: 'blank' },
  { type: 'prompt', html: '$ availability' },
  { type: 'ok', html: '✓&nbsp;open to work' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const heroBgRef = useRef(null);
  const termBodyRef = useRef(null);
  const stackTypedRef = useRef(null);
  const stackCurRef = useRef(null);
  const orbWrapRef = useRef(null);
  const termWrapRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, nx: 0, ny: 0, active: false });

  // hero particle network
  useEffect(() => {
    const canvas = heroBgRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    const N = 65;
    const DIST = 150;
    let W, H, pts, raf;

    function accent() {
      return getComputedStyle(document.body).getPropertyValue('--color-accent').trim() || '#2756e6';
    }
    function resize() {
      const hero = canvas.closest('section') || canvas.parentElement;
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    }
    function makePoint() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.4 + 0.8,
      };
    }
    function init() {
      resize();
      pts = Array.from({ length: N }, makePoint);
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      const col = accent();
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = col;
            ctx.globalAlpha = (1 - d / DIST) * 0.18;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.45;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      const m = mouseRef.current;
      if (m.active) {
        for (const p of pts) {
          const dx = p.x - m.x;
          const dy = p.y - m.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = col;
            ctx.globalAlpha = (1 - d / MOUSE_DIST) * 0.4;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }

    init();
    frame();

    const handleResize = () => {
      cancelAnimationFrame(raf);
      init();
      frame();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // typewriter on the stack line
  useEffect(() => {
    const el = stackTypedRef.current;
    const cur = stackCurRef.current;
    if (!el) return;

    function highlightQuotes(s) {
      let out = '';
      let inQuote = false;
      let word = '';
      for (const c of s) {
        if (c === "'" && !inQuote) {
          inQuote = true;
          word = "'";
        } else if (c === "'" && inQuote) {
          word += "'";
          out += `<span class="c">${word}</span>`;
          word = '';
          inQuote = false;
        } else if (inQuote) {
          word += c;
        } else {
          out += c;
        }
      }
      if (inQuote) out += `<span class="c">${word}</span>`;
      return out;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.innerHTML = highlightQuotes(STACK_CODE);
      if (cur) cur.remove();
      return;
    }

    let pos = 0;
    let timeoutId;
    function type() {
      if (pos <= STACK_CODE.length) {
        el.innerHTML = highlightQuotes(STACK_CODE.slice(0, pos));
        pos++;
        timeoutId = setTimeout(type, 44 + Math.random() * 30);
      }
    }
    timeoutId = setTimeout(type, 1100);
    return () => clearTimeout(timeoutId);
  }, []);

  // floating terminal
  useEffect(() => {
    const body = termBodyRef.current;
    if (!body) return;

    function renderLine(line) {
      const row = document.createElement('div');
      row.className = 'term-line';
      switch (line.type) {
        case 'blank':
          row.innerHTML = '&nbsp;';
          break;
        case 'prompt':
          row.innerHTML = `<span class="tp">${line.html}</span>`;
          break;
        case 'ok':
          row.innerHTML = `<span class="tk">${line.html}</span>`;
          break;
        case 'history':
          row.innerHTML = `<span class="th">${line.html}</span>`;
          break;
        default:
          row.textContent = line.html;
      }
      return row;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      TERM_LINES.forEach((line) => body.appendChild(renderLine(line)));
      return;
    }

    let i = 0;
    let timeoutId;
    function next() {
      if (i >= TERM_LINES.length) return;
      const line = TERM_LINES[i++];
      body.appendChild(renderLine(line));
      const delay = line.type === 'blank' ? 160 : line.type === 'prompt' ? 340 : 200;
      timeoutId = setTimeout(next, delay);
    }
    timeoutId = setTimeout(next, 1600);
    return () => clearTimeout(timeoutId);
  }, []);

  // cursor parallax — drifts the orb and tilts the terminal toward the pointer,
  // and feeds cursor position to the particle network above
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const orb = orbWrapRef.current;
    const term = termWrapRef.current;

    function handleMove(e) {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;
      mouseRef.current = { x, y, nx, ny, active: true };

      if (orb) orb.style.transform = `translate(${nx * 22}px, ${ny * 22}px)`;
      if (term) term.style.transform = `perspective(700px) rotateX(${ny * -5}deg) rotateY(${nx * 7}deg)`;
    }

    function handleLeave() {
      mouseRef.current.active = false;
      if (orb) orb.style.transform = '';
      if (term) term.style.transform = '';
    }

    section.addEventListener('mousemove', handleMove);
    section.addEventListener('mouseleave', handleLeave);
    return () => {
      section.removeEventListener('mousemove', handleMove);
      section.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-[clamp(72px,12vh,140px)] pb-24">
      <canvas id="heroBg" aria-hidden="true" ref={heroBgRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="dotgrid absolute inset-0 z-0 pointer-events-none bg-[length:30px_30px] opacity-50 [mask-image:radial-gradient(120%_90%_at_75%_0%,#000_0%,transparent_65%)] [-webkit-mask-image:radial-gradient(120%_90%_at_75%_0%,#000_0%,transparent_65%)]" />
      <div ref={orbWrapRef} className="absolute right-[-80px] top-1/2 w-[620px] h-[620px] pointer-events-none z-0 transition-transform duration-700 ease-out will-change-transform">
        <div className="hero__orb w-full h-full rounded-full blur-[36px] [background:radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-accent)_14%,transparent)_0%,transparent_70%)]" aria-hidden="true" />
      </div>
      <div ref={termWrapRef} className="hidden min-[1300px]:block absolute min-[1300px]:right-[max(48px,calc(50vw_-_630px))] top-1/2 w-[252px] z-[2] transition-transform duration-500 ease-out will-change-transform">
        <div
          className="hero__term bg-surface border border-line rounded-[14px] shadow-[var(--shadow-md)] overflow-hidden opacity-90"
          aria-hidden="true"
          id="heroTerm"
        >
          <div className="flex items-center gap-1.5 px-[13px] py-[9px] bg-surface-2 border-b border-line">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
            <span className="font-mono text-[11px] text-ink-faint ml-auto">bash</span>
          </div>
          <div className="px-[15px] py-[13px] font-mono text-[11.5px] leading-[1.75] text-ink-soft min-h-[158px]" id="termBody" ref={termBodyRef} />
        </div>
      </div>
      <div className={`${WRAP} relative z-[1] max-w-[920px]`}>
        <div className="reveal inline-flex items-center gap-[9px] font-mono text-[12.5px] text-ink-soft border border-line-strong bg-surface px-[13px] py-1.5 rounded-[100px] mb-[30px]" style={{ '--d': '.05s' }}>
          <span className="dot w-2 h-2 rounded-full bg-ok"></span> open to full-time roles &amp; contract work
        </div>
        <h1 className="reveal font-display font-semibold text-[clamp(40px,7.2vw,82px)] leading-[1.02] tracking-[-0.03em] m-0 mb-[26px] max-w-[15ch]" style={{ '--d': '.12s' }}>
          I build <span className="text-accent">reliable&nbsp;</span> web products, end&nbsp;to&nbsp;end.
        </h1>
        <p className="reveal text-[clamp(17px,2vw,21px)] text-ink-soft max-w-[46ch] m-0 mb-[18px]" style={{ '--d': '.2s' }}>
          Full-stack developer with 8+ years shipping for the web — comfortable from database to interface.
        </p>
        <p className="reveal font-mono text-[13px] text-ink-faint m-0 mb-[34px]" style={{ '--d': '.27s' }}>
          <span className="c">const</span> stack = [<span id="stackTyped" ref={stackTypedRef}></span><span className="stack-cur" ref={stackCurRef}>▎</span>]
        </p>
        <div className="reveal flex gap-[13px] flex-wrap" style={{ '--d': '.34s' }}>
          <a href="#work" className={`${BTN_PRIMARY} !text-white`}>View my work <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span></a>
          <a href="#contact" className={BTN}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}
