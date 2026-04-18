import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  position?: "top" | "bottom" | "center";
  intensity?: "soft" | "strong";
};

export function SunHorizon({ className, position = "center", intensity = "soft" }: Props) {
  const yMap = {
    top: "-30%",
    center: "40%",
    bottom: "85%",
  } as const;
  const opacity = intensity === "strong" ? 0.9 : 0.55;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden -z-10", className)}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF986A" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F16D34" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F16D34" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sky-haze" cx="50%" cy="0%" r="75%">
            <stop offset="0%" stopColor="#BBE0EF" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#BBE0EF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#BBE0EF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="horizon-strip" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BBE0EF" stopOpacity="0" />
            <stop offset="25%" stopColor="#BBE0EF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F16D34" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#0F1640" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#BBE0EF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#sky-haze)" opacity={opacity} />

        <g transform={`translate(720, ${yMap[position] === "-30%" ? -270 : yMap[position] === "40%" ? 360 : 765})`}>
          <circle r="420" fill="url(#sun-core)" opacity={opacity} />
          <circle
            r="180"
            fill="none"
            stroke="#F16D34"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />
          <circle
            r="230"
            fill="none"
            stroke="#FF986A"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
          <circle
            r="290"
            fill="none"
            stroke="#BBE0EF"
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />
        </g>

        <rect x="0" y="618" width="1440" height="1" fill="url(#horizon-strip)" opacity="0.9" />
        <rect x="0" y="620" width="1440" height="1" fill="url(#horizon-strip)" opacity="0.25" />
      </svg>
    </div>
  );
}
