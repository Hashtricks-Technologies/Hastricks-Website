import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16">
      <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
        <HashGlyph /> faq
      </p>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
        Questions, answered.
      </h2>
      <Accordion className="mt-10 max-w-3xl">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
