import "./Loader.css";

function JewelryLoader({ size = 80 }) {
  return (
    <div className="jewelry-loader-screen" role="status" aria-label="Loading">
      <svg
        className="jewelry-loader"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
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
            <ellipse cx="50" cy="56" rx="29" ry="17" />
          </clipPath>
        </defs>

        <g className="jewelry-loader-rotation">
          <ellipse
            cx="50"
            cy="56"
            rx="29"
            ry="17"
            stroke="url(#jewelry-gold)"
            strokeWidth="5"
          />
          <path
            d="M43 40 50 30l7 10-7 7-7-7Z"
            fill="#f8edc5"
            stroke="#d4af37"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="m43 40 14 0M50 30v17" stroke="#d4af37" strokeWidth="1" />
          <rect
            className="jewelry-loader-shimmer"
            x="-70"
            y="20"
            width="35"
            height="75"
            fill="url(#jewelry-shimmer)"
            clipPath="url(#jewelry-ring-clip)"
          />
        </g>
      </svg>
      <span className="jewelry-loader-label">Loading products</span>
    </div>



  );
}

export default JewelryLoader;