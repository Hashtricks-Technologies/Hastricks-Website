"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  open: string | null;
  setOpen: (value: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const ItemContext = React.createContext<{ value: string } | null>(null);

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div className={cn("divide-y divide-[var(--color-surface-border)]", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ItemContext.Provider value={{ value }}>
      <div className={cn("py-2", className)}>{children}</div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext)!;
  const item = React.useContext(ItemContext)!;
  const isOpen = ctx.open === item.value;
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-[var(--color-neutral)] hover:text-[var(--color-accent)] transition-colors",
        className,
      )}
      onClick={() => ctx.setOpen(isOpen ? null : item.value)}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")} />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(AccordionContext)!;
  const item = React.useContext(ItemContext)!;
  const isOpen = ctx.open === item.value;
  if (!isOpen) return null;
  return <div className={cn("pb-4 text-sm text-[var(--color-neutral)]/70", className)}>{children}</div>;
}
