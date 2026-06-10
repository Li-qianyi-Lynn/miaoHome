// Elegant line-art cat SVG — used in hero floating animation
export function LineCat({ className = '', size = 90, color = '#EC4899', opacity = 0.7 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="60" cy="78" rx="30" ry="26" stroke={color} strokeWidth="2" opacity={opacity} />
      {/* Head */}
      <circle cx="60" cy="46" r="24" stroke={color} strokeWidth="2" opacity={opacity} />
      {/* Left ear */}
      <path d="M40 30 L32 12 L50 24" stroke={color} strokeWidth="2" strokeLinejoin="round" opacity={opacity} />
      {/* Right ear */}
      <path d="M80 30 L88 12 L70 24" stroke={color} strokeWidth="2" strokeLinejoin="round" opacity={opacity} />
      {/* Eyes */}
      <ellipse cx="51" cy="44" rx="4.5" ry="5.5" fill={color} opacity={opacity * 0.9} />
      <ellipse cx="69" cy="44" rx="4.5" ry="5.5" fill={color} opacity={opacity * 0.9} />
      <circle cx="52.5" cy="42.5" r="1.5" fill="white" />
      <circle cx="70.5" cy="42.5" r="1.5" fill="white" />
      {/* Nose */}
      <path d="M57 52 L60 55 L63 52" stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill={color} opacity={opacity * 0.8} />
      {/* Whiskers */}
      <line x1="28" y1="50" x2="52" y2="52" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity={opacity * 0.5} />
      <line x1="28" y1="55" x2="52" y2="55" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity={opacity * 0.5} />
      <line x1="92" y1="50" x2="68" y2="52" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity={opacity * 0.5} />
      <line x1="92" y1="55" x2="68" y2="55" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity={opacity * 0.5} />
      {/* Tail */}
      <path d="M90 88 Q110 72 105 55 Q100 42 92 48" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity={opacity} />
      {/* Paws */}
      <ellipse cx="44" cy="100" rx="10" ry="6" stroke={color} strokeWidth="1.5" opacity={opacity * 0.7} />
      <ellipse cx="76" cy="100" rx="10" ry="6" stroke={color} strokeWidth="1.5" opacity={opacity * 0.7} />
      {/* Blush */}
      <ellipse cx="43" cy="52" rx="5" ry="3" fill={color} opacity="0.15" />
      <ellipse cx="77" cy="52" rx="5" ry="3" fill={color} opacity="0.15" />
    </svg>
  )
}

export function PawMark({ size = 20, color = '#EC4899', opacity = 0.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <ellipse cx="30" cy="42" rx="14" ry="10" fill={color} opacity={opacity} />
      <ellipse cx="14" cy="28" rx="7" ry="9" fill={color} opacity={opacity} />
      <ellipse cx="30" cy="22" rx="7" ry="9" fill={color} opacity={opacity} />
      <ellipse cx="46" cy="28" rx="7" ry="9" fill={color} opacity={opacity} />
    </svg>
  )
}
