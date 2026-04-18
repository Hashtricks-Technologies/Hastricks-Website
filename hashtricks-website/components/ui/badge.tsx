import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 px-2.5 py-0.5 text-xs text-[var(--color-neutral)]/70 font-mono",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
