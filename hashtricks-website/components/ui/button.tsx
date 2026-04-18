import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "./slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-primary-fg)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-fg)]",
        cta:
          "bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:brightness-110 shadow-[0_8px_28px_-10px_rgba(34,211,238,0.55)]",
        outline:
          "border border-[var(--color-surface-border)] bg-transparent text-[var(--color-neutral)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
        ghost:
          "bg-transparent text-[var(--color-neutral)] hover:bg-[var(--color-surface-muted)]",
        subtle:
          "bg-[var(--color-surface-muted)] text-[var(--color-neutral)] hover:bg-[var(--color-surface-muted)]/70",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
