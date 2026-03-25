export const Pokeball = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    width="1em"
    height="1em"
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
    <path
      d="M2 50h96"
      stroke="currentColor"
      strokeWidth="4"
    />
    <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="4" fill="var(--color-background)" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
);
