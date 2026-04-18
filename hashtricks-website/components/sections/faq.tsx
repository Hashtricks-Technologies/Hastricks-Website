import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/layout/section-heading";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="border-t border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/30 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionHeading
          index="04"
          eyebrow="FAQ"
          title={
            <>
              Questions,{" "}
              <span className="italic font-normal text-[var(--color-sky)]">answered</span>.
            </>
          }
        />
        <Accordion className="mt-12 max-w-3xl">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
