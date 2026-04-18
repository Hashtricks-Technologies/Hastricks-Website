import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/lib/data/company";
import { ContactForm } from "@/components/sections/contact-form";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call or send us your project brief. We reply within one business day.",
  alternates: { canonical: "https://hashtricks.tech/contact" },
  openGraph: {
    title: "Contact — Hashtricks Technologies",
    description: "Book a call or send us your project brief. We reply within one business day.",
    url: "https://hashtricks.tech/contact",
  },
};

const quickLinks = [
  {
    icon: Clock,
    label: "Book a discovery call",
    sub: "30 min, no obligation",
    href: company.bookCallUrl,
    external: true,
    variant: "cta" as const,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp us",
    sub: "Fast replies, informal",
    href: company.whatsappUrl,
    external: true,
    variant: "outline" as const,
  },
  {
    icon: Mail,
    label: company.email,
    sub: "For detailed briefs",
    href: `mailto:${company.email}`,
    external: false,
    variant: "outline" as const,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-16 md:pt-32 md:pb-20">
          <span className="eyebrow reveal">
            <span className="text-numeral text-[var(--color-primary)]">01</span>
            <span className="eyebrow-rule" />
            <span>Get in touch</span>
          </span>
          <h1 className="mt-8 text-display-xl text-[var(--color-neutral)] max-w-4xl reveal">
            Let&apos;s{" "}
            <span className="italic font-normal text-[var(--color-sky)]">build</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
            Book a call, WhatsApp us, or fill the form. We reply within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          <div className="space-y-6">
            <div className="horizon-line w-full" />
            <div className="grid gap-4 stagger-children">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="group flex items-center gap-5 rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 px-6 py-5 transition hover:border-[var(--color-primary)]/60 hover:-translate-y-0.5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-secondary)] text-[var(--color-primary)] group-hover:border-[var(--color-primary)]/40 transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold text-[var(--color-neutral)] truncate">
                        {link.label}
                      </p>
                      <p className="text-sm text-[var(--color-neutral)]/55">{link.sub}</p>
                    </div>
                    <span className="ml-auto text-[var(--color-neutral)]/40 group-hover:text-[var(--color-primary)] transition-colors shrink-0">
                      →
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="rounded-2xl border border-[var(--color-surface-border)]/70 bg-[var(--color-secondary)]/50 p-6 space-y-4 reveal">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-semibold text-sm text-[var(--color-neutral)]">Based in {company.location}</p>
                  <p className="mt-1 text-sm text-[var(--color-neutral)]/60">
                    Founded {company.foundedYear} · Serving clients across India
                  </p>
                </div>
              </div>
              <div className="horizon-line w-full" />
              <p className="text-sm text-[var(--color-neutral)]/55 leading-relaxed">
                We respond to every enquiry. If you&apos;re not a fit, we&apos;ll say so clearly and
                often point you toward someone who is.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-7 md:p-10 reveal">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-neutral)]">
              Send a brief
            </h2>
            <p className="mt-2 text-sm text-[var(--color-neutral)]/60">
              Tell us what you&apos;re building. We&apos;ll read every word.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
