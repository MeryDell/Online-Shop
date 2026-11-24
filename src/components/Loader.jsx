function JewelryLoader({ size = 80 }) {
  return (
    <div
      className="flex min-h-60 flex-col items-center justify-center gap-3 bg-[#090909]"
      role="status"
      aria-label="Loading"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        className="overflow-visible drop-shadow-[0_0_7px_rgba(212,175,55,0.22)]"
      >
        <defs>
          <linearGradient id="jewelry-gold" x1="25" y1="20" x2="75" y2="80">
            <stop offset="0%" stopColor="#f4df9b" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#a87c19" />
          </linearGradient>

          <linearGradient id="jewelry-shimmer" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff8d8" stopOpacity="0" />
            <stop offset="50%" stopColor="#fff8d8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff8d8" stopOpacity="0" />
          </linearGradient>

          <clipPath id="jewelry-ring-clip">
            <ellipse cx="50" cy="59" rx="29" ry="17" />
          </clipPath>

          <clipPath id="jewelry-shine-clip">
            <path d="M50 26 54 37l10 3-10 4-4 11-4-11-10-4 10-3 4-11Z" />
          </clipPath>
        </defs>

        <g className="origin-center motion-safe:animate-bounce">
          <ellipse
            cx="50"
            cy="59"
            rx="29"
            ry="17"
            stroke="url(#jewelry-gold)"
            strokeWidth="5"
          />

          <ellipse
            cx="50"
            cy="59"
            rx="29"
            ry="17"
            stroke="#fff3c2"
            strokeOpacity=".55"
            strokeWidth="1"
            className="origin-center motion-safe:animate-pulse"
          />

          <path
            d="M43 40 50 30l7 10-7 7-7-7Z"
            fill="#f8edc5"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinejoin="round"
            className="motion-safe:animate-pulse"
          />

          <path d="m43 40 14 0M50 30v17" stroke="#d4af37" strokeWidth="1" />

          <rect
            x="-20"
            y="39"
            width="30"
            height="40"
            fill="url(#jewelry-shimmer)"
            clipPath="url(#jewelry-ring-clip)"
            className="motion-safe:animate-ping"
          />

          <path
            d="M50 26 54 37l10 3-10 4-4 11-4-11-10-4 10-3 4-11Z"
            fill="url(#jewelry-shimmer)"
            clipPath="url(#jewelry-shine-clip)"
            className="motion-safe:animate-ping"
          />
        </g>
      </svg>

      <span className="text-xs font-medium uppercase tracking-wider text-[#c8ae8d]">
        Loading products
      </span>
    </div>
  );
}

export default JewelryLoader;