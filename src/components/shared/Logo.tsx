import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Abed Hossain — Home">
      {/* Monogram icon */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0"
            y1="0"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#13FDFD" />
            <stop offset="60%" stopColor="#139BFD" />
            <stop offset="100%" stopColor="#FF014F" />
          </linearGradient>
        </defs>

        {/* Badge */}
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          rx="12"
          fill="#010A10"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
        />

        {/* A */}
        <path
          d="M11 31L17.5 13H20.5L27 31H23.8L22.3 26.7H15.7L14.2 31H11ZM16.6 24H21.4L19 17.2L16.6 24Z"
          fill="url(#logo-gradient)"
        />
        {/* H */}
        <path
          d="M25.5 31V13H28.7V19.9H33.3V13H36.5V31H33.3V22.7H28.7V31H25.5Z"
          fill="url(#logo-gradient)"
          fillOpacity="0.85"
        />
      </svg>

      {/* Name */}
      <span className="text-xl font-bold tracking-tight">
        Abed{" "}
        <span className="theme-gradient">Hossain</span>
      </span>
    </Link>
  );
};

export default Logo;
