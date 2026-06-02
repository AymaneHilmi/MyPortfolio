// Éléments d'interface façon caméra / viseur — purement décoratifs.

// Quatre équerres d'angle qui encadrent une zone comme un viseur.
export function ViewfinderCorners({ className = "", size = 22, gap = 0 }) {
  const common = "absolute w-[var(--s)] h-[var(--s)] border-ink/70";
  const style = { "--s": `${size}px` };
  const off = `${gap}px`;
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} style={style}>
      <span className={`${common} border-l border-t`} style={{ top: off, left: off }} />
      <span className={`${common} border-r border-t`} style={{ top: off, right: off }} />
      <span className={`${common} border-l border-b`} style={{ bottom: off, left: off }} />
      <span className={`${common} border-r border-b`} style={{ bottom: off, right: off }} />
    </div>
  );
}

// Petit réticule de mise au point.
export function Reticle({ className = "" }) {
  return (
    <span className={`pointer-events-none inline-block ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="6" y="6" width="22" height="22" />
        <line x1="17" y1="0" x2="17" y2="9" />
        <line x1="17" y1="25" x2="17" y2="34" />
        <line x1="0" y1="17" x2="9" y2="17" />
        <line x1="25" y1="17" x2="34" y2="17" />
      </svg>
    </span>
  );
}

// Voyant d'enregistrement clignotant.
export function RecDot({ label = "REC", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-ink/70 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-rec animate-rec-blink" />
      {label}
    </span>
  );
}

// Libellé technique monospace (style EXIF).
export function MetaTag({ children, className = "" }) {
  return (
    <span className={`font-mono text-[11px] tracking-widest text-mute ${className}`}>
      {children}
    </span>
  );
}
