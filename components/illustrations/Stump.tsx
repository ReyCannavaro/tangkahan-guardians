export default function Stump({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 600" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract chopped tree stumps in monoline/vector style */}
      <path fill="var(--color-forest-900)" d="M100,600 L120,400 L250,380 L280,600 Z" />
      <path fill="var(--color-forest-800)" d="M400,600 L450,350 L600,320 L650,600 Z" />
      <path fill="var(--color-forest-700)" d="M250,600 L280,450 L420,430 L450,600 Z" />
      {/* Some jagged edges for stumps */}
      <polygon fill="var(--color-forest-950)" points="450,350 480,300 520,340 550,290 600,320" opacity="0.5"/>
    </svg>
  );
}
