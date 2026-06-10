// Accurate Space Needle silhouette SVG
export default function SpaceNeedle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 520"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Warm observation-deck halo */}
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#F0C060" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#F0C060" stopOpacity="0"   />
        </radialGradient>
        {/* Horizon city-light glow */}
        <radialGradient id="cityGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%"   stopColor="#4A7FA8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4A7FA8" stopOpacity="0"   />
        </radialGradient>
      </defs>

      {/* City-glow from base */}
      <ellipse cx="80" cy="510" rx="160" ry="55" fill="url(#cityGlow)" />

      {/* Observation-deck halo */}
      <ellipse cx="80" cy="180" rx="75" ry="38" fill="url(#halo)" />

      {/* ── Base legs (3 tapered arms) ─────────────────── */}
      {/* Far left  */}
      <path d="M80,285 L4,520"   stroke="#141D32" strokeWidth="9"  strokeLinecap="round" />
      {/* Far right */}
      <path d="M80,285 L156,520" stroke="#141D32" strokeWidth="9"  strokeLinecap="round" />
      {/* Near left  */}
      <path d="M80,285 L42,520"  stroke="#141D32" strokeWidth="6"  strokeLinecap="round" />
      {/* Near right */}
      <path d="M80,285 L118,520" stroke="#141D32" strokeWidth="6"  strokeLinecap="round" />

      {/* Horizontal ring braces */}
      <line x1="18"  y1="430" x2="142" y2="430" stroke="#141D32" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="10"  y1="480" x2="150" y2="480" stroke="#141D32" strokeWidth="5"   strokeLinecap="round" />

      {/* ── Lower shaft ─────────────────────────────────── */}
      <rect x="75" y="255" width="10" height="37" fill="#141D32" rx="1" />

      {/* ── Observation deck (saucer) ───────────────────── */}
      {/* Main body */}
      <path d="M22,195 Q20,155 80,155 Q140,155 138,195 Q138,235 80,235 Q22,235 22,195Z"
            fill="#131B2C" />
      {/* Top curve of saucer */}
      <path d="M32,175 Q32,162 80,162 Q128,162 128,175"
            fill="#1A2540" />
      {/* Underside glow strip */}
      <path d="M30,210 Q30,222 80,222 Q130,222 130,210"
            stroke="#D4A020" strokeWidth="1" fill="none" opacity="0.35" />
      {/* Windows dots */}
      {[0.15, 0.28, 0.42, 0.56, 0.70, 0.83].map((t, i) => (
        <circle key={i} cx={22 + t * 116} cy="192" r="2.2" fill="#F0C060" opacity="0.55" />
      ))}

      {/* ── Neck above deck ─────────────────────────────── */}
      <rect x="74" y="110" width="12" height="48" fill="#141D32" rx="1" />

      {/* Upper ring */}
      <ellipse cx="80" cy="118" rx="20" ry="5.5" fill="#141D32" />

      {/* ── Spire ───────────────────────────────────────── */}
      <path d="M77,0 L83,0 L88,112 L72,112Z" fill="#141D32" />

      {/* Antenna tip — blinking red */}
      <circle cx="80" cy="5" r="3.5" fill="#F04040" className="animate-blink" opacity="0.9" />
    </svg>
  )
}
