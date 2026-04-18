import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  fade?: boolean;
  speed?: "slow" | "normal" | "fast";
};

export function Marquee({ children, className, fade = true, speed = "normal" }: Props) {
  const speedCls =
    speed === "slow" ? "[--marquee-duration:60s]" : speed === "fast" ? "[--marquee-duration:25s]" : "[--marquee-duration:40s]";

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        fade &&
          "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        speedCls,
        className,
      )}
    >
      <div
        className="flex shrink-0 items-center gap-16 pr-16 [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]"
        aria-hidden={false}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-16 pr-16 [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused]"
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
