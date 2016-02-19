// Shared Tailwind class strings reused across components.

export const WRAP = 'mx-auto max-w-[1120px] px-7';

export const BTN =
  'group inline-flex items-center gap-[9px] font-mono text-[13.5px] font-medium px-[18px] py-[11px] rounded-[11px] border border-line-strong bg-surface text-ink cursor-pointer transition-[transform,background,border-color,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)] hover:border-ink';

export const BTN_PRIMARY =
  BTN +
  ' !bg-accent text-accent-ink !border-accent hover:!shadow-[0_8px_22px_var(--accent-wash)] hover:!border-accent hover:brightness-105';

export const CHIP =
  'group inline-flex items-center gap-1.5 font-mono text-[13px] text-ink border border-line-strong bg-surface px-[13px] py-[7px] rounded-[9px] transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent';

export const TAG =
  'font-mono text-[12.5px] text-ink-soft border border-line bg-surface-2 px-[11px] py-[5px] rounded-lg';

export const CI = 'shrink-0 block w-[15px] h-[15px]';

// monochrome inline-svg icon used inside a chip (inherits hover color from the chip)
export const CI_SVG = `${CI} text-ink-faint group-hover:text-accent transition-colors`;

export const SEC = 'py-[104px]';
