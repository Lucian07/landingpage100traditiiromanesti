/**
 * Elemente decorative inspirate din posterul evenimentului:
 * motive geometrice românești (romburi, zigzag, stele) desenate inline în SVG.
 * Discrete, în ocru / cărămiziu, fără imagini raster.
 */

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center px-4 py-2 ${className}`} aria-hidden="true">
      <svg
        className="h-7 w-full max-w-4xl text-ocru opacity-70"
        viewBox="0 0 240 28"
        preserveAspectRatio="none"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern id="ornament-banda" width="24" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M12 6 L18 14 L12 22 L6 14 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            />
            <path d="M12 11 L14.5 14 L12 17 L9.5 14 Z" fill="currentColor" opacity="0.55" />
            <path
              d="M0 14 L3 10 L6 14 M18 14 L21 10 L24 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
            />
          </pattern>
        </defs>
        <line x1="0" y1="2" x2="240" y2="2" stroke="currentColor" strokeWidth="0.6" />
        <rect y="0" width="240" height="28" fill="url(#ornament-banda)" />
        <line x1="0" y1="26" x2="240" y2="26" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    </div>
  );
}

/** Colț decorativ (motiv popular în triunghiuri și romburi), ca pe poster. */
export function OrnamentCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <path d="M2 22 L2 2 L22 2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 30 L8 8 L30 8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M14 14 L22 14 L18 20 Z" fill="currentColor" opacity="0.8" />
      <path d="M28 8 L34 14 L28 20 L22 14 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M8 36 L14 42 L8 48 L2 42 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="42" cy="8" r="1.6" fill="currentColor" />
      <circle cx="8" cy="54" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Rama decorativă cu colțuri, folosită în jurul unor blocuri de conținut. */
export function OrnamentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-lg border border-ocru/45 p-6 sm:p-10">
      <OrnamentCorner className="absolute top-2 left-2 h-10 w-10 text-brand/70" />
      <OrnamentCorner className="absolute top-2 right-2 h-10 w-10 scale-x-[-1] text-brand/70" />
      <OrnamentCorner className="absolute bottom-2 left-2 h-10 w-10 scale-y-[-1] text-brand/70" />
      <OrnamentCorner className="absolute right-2 bottom-2 h-10 w-10 scale-[-1] text-brand/70" />
      {children}
    </div>
  );
}
