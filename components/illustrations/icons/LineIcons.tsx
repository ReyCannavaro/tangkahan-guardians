type IconProps = {
  className?: string;
  size?: number;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ElephantIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M5 18c0-5.2 4.1-9 9.8-9H20c4.4 0 8 3.4 8 7.8v3.7" />
      <path d="M8.5 21.5v4.2M18.5 21.5v4.2M24 21.5v4.2" />
      <path d="M27.8 18.2c1.8 1.4 1.5 4.5-.4 5.5-1.3.7-2.9-.1-3.1-1.6" />
      <path d="M6.5 15.2C4.2 14.1 3 12.4 3 10.5c2.2-.2 4.3.9 5.4 2.8" />
      <path d="M20.5 13.5h.1" />
    </svg>
  );
}

export function CanopyIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M6 24h20" />
      <path d="M16 24V10" />
      <path d="M8 17c-2.2-2.6-.5-6.6 3-6.8.9-3.5 6-4.2 7.9-1.1 3.2-.4 5.9 2 5.7 5.1 2.4 1.2 2.1 4.8-.4 5.6H8.9" />
      <path d="M16 16l-4-3M16 18l4-4" />
    </svg>
  );
}

export function RiverIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M6 9c3.2 0 3.2 2 6.4 2s3.2-2 6.4-2 3.2 2 6.4 2" />
      <path d="M4 16c4 0 4 2.5 8 2.5s4-2.5 8-2.5 4 2.5 8 2.5" />
      <path d="M7 24c2.8 0 2.8 1.8 5.6 1.8s2.8-1.8 5.6-1.8 2.8 1.8 5.6 1.8" />
    </svg>
  );
}

export function FootprintIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M16 12c3.3 0 6 3.1 6 7s-2.7 6-6 6-6-2.1-6-6 2.7-7 6-7Z" />
      <path d="M9.3 11.6c-1.5-.6-2.1-2.5-1.3-4.1s2.6-2.4 4.1-1.8 2.1 2.5 1.3 4.1-2.6 2.4-4.1 1.8Z" />
      <path d="M19.9 9.8c-.8-1.6-.2-3.5 1.3-4.1s3.3.2 4.1 1.8.2 3.5-1.3 4.1-3.3-.2-4.1-1.8Z" />
    </svg>
  );
}

export function PatrolIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M16 4l10 4v6c0 6.5-4.2 11.4-10 14-5.8-2.6-10-7.5-10-14V8l10-4Z" />
      <path d="M12 16l2.7 2.7L21 12.5" />
    </svg>
  );
}

export function HomestayIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M5 15l11-9 11 9" />
      <path d="M8 14v10h16V14" />
      <path d="M13 24v-6h6v6M7 27h18M10 24v3M22 24v3" />
    </svg>
  );
}

export function LeafIcon({ className, size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...baseProps}>
      <path d="M5 19c8.5.4 14-5.1 14-14-8.9.2-14.2 5.4-14 14Z" />
      <path d="M5 19c3.8-5.2 7.4-8.4 14-14" />
    </svg>
  );
}

export function SawIcon({ className, size = 32 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} {...baseProps}>
      <path d="M5 20l12-12 7 7-12 12H5v-7Z" />
      <path d="M17 8l2 5 5 2M8 20l4 4M12 16l4 4" />
      <path d="M5 24h3M5 27h7" />
    </svg>
  );
}
