/**
 * Separator decorativ: motiv geometric românesc (romburi + zigzag),
 * desenat inline în SVG, discret, în ocru cu opacitate redusă.
 */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden="true">
      <svg
        className="h-6 w-full max-w-3xl text-ocru opacity-45"
        viewBox="0 0 240 24"
        preserveAspectRatio="none"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern id="ornament-romb" width="24" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M12 4 L20 12 L12 20 L4 12 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="M0 12 L4 8 L8 12 L12 8" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <path
              d="M12 16 L16 12 L20 16 L24 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="240" height="24" fill="url(#ornament-romb)" />
      </svg>
    </div>
  );
}
