export default function HeroCanopy({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="var(--color-forest-950)" d="M0,800 L0,300 C200,280 400,350 720,250 C1040,150 1200,320 1440,280 L1440,800 Z" opacity="0.8" />
      <path fill="var(--color-forest-900)" d="M0,800 L0,400 C250,380 450,450 720,350 C990,250 1200,420 1440,380 L1440,800 Z" opacity="0.7" />
    </svg>
  );
}
