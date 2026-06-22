export default function Sunrise({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 600" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      {/* Sun rays glowing */}
      <circle cx="400" cy="500" r="300" fill="var(--color-sunset-600)" opacity="0.3" filter="blur(40px)" />
      <circle cx="400" cy="500" r="200" fill="var(--color-amber-500)" opacity="0.5" filter="blur(20px)" />
      <circle cx="400" cy="500" r="100" fill="var(--color-amber-400)" />
      {/* Mountains/Hills in the foreground to give context */}
      <path fill="var(--color-forest-800)" d="M0,600 L100,450 L300,550 L500,400 L800,550 L800,600 Z" opacity="0.9" />
    </svg>
  );
}
