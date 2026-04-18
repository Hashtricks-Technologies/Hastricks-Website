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

export function WhatsappIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("h-5 w-5", className)}
      {...props}
    >
      <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.48 0 .14 5.34.13 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.94 11.94 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.34 11.92-11.9a11.83 11.83 0 0 0-3.46-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.27C2.14 6.43 6.58 2 12.06 2c2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7A9.93 9.93 0 0 1 12.05 21.8Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.4-1.5a9.05 9.05 0 0 1-1.67-2.07c-.18-.3-.02-.47.13-.62.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.22 5.1 4.52.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.58-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34Z" />
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
