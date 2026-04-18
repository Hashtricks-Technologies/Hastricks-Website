import * as React from "react";
import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

export function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.02 2.5 2.5 0 0 1 .02-5.02ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.04 3.79-2.04 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.38c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21h-4V9Z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
