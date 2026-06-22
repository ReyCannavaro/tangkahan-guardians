export default function HeroTrees({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Some tree trunks and canopies */}
      <path fill="var(--color-forest-800)" d="M100,800 L120,500 L140,800 Z" />
      <path fill="var(--color-forest-800)" d="M300,800 L330,400 L360,800 Z" />
      <path fill="var(--color-forest-800)" d="M1100,800 L1120,450 L1150,800 Z" />
      <path fill="var(--color-forest-800)" d="M1300,800 L1340,350 L1380,800 Z" />
      
      {/* Foliage */}
      <circle cx="120" cy="500" r="100" fill="var(--color-forest-800)" opacity="0.9"/>
      <circle cx="330" cy="400" r="150" fill="var(--color-forest-800)" opacity="0.9"/>
      <circle cx="1120" cy="450" r="120" fill="var(--color-forest-800)" opacity="0.9"/>
      <circle cx="1340" cy="350" r="180" fill="var(--color-forest-800)" opacity="0.9"/>
      
      {/* Ground */}
      <path fill="var(--color-forest-700)" d="M0,800 L0,600 C300,550 500,650 720,600 C940,550 1200,650 1440,550 L1440,800 Z" />
    </svg>
  );
}
