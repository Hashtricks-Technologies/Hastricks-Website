"use client";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type SheetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextValue | null>(null);

export function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <SheetContext.Provider value={{ open, setOpen: onOpenChange }}>{children}</SheetContext.Provider>
  );
}

export function SheetTrigger({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(SheetContext)!;
  return (
    <button
      type="button"
      className={className}
      onClick={() => ctx.setOpen(true)}
      {...props}
    >
      {children}
    </button>
  );
}

export function SheetContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(SheetContext)!;
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") ctx.setOpen(false);
    }
    if (ctx.open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [ctx]);
  if (!ctx.open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => ctx.setOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-sm border-l border-[var(--color-surface-border)] bg-[var(--color-secondary)] p-6 shadow-2xl animate-in slide-in-from-right",
          className,
        )}
      >
        <button
          type="button"
          onClick={() => ctx.setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-2 text-[var(--color-neutral)]/70 hover:text-[var(--color-neutral)]"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
