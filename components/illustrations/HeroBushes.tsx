export default function HeroBushes({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Foreground large leaves / bushes */}
      <path fill="var(--color-forest-600)" d="M-50,850 C-20,600 150,550 250,850 Z" />
      <path fill="var(--color-forest-600)" d="M150,850 C250,650 400,600 500,850 Z" />
      <path fill="var(--color-forest-600)" d="M900,850 C1000,600 1200,550 1300,850 Z" />
      <path fill="var(--color-forest-600)" d="M1200,850 C1300,500 1500,550 1550,850 Z" />
      
      {/* A bit of mist/grain effect (overlay) */}
      <rect width="100%" height="100%" fill="url(#grain)" opacity="0.05" />
      <defs>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
        </filter>
      </defs>
    </svg>
  );
}
