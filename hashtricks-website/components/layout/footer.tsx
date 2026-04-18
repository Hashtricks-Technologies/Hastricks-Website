import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/brand/social-icons";
import { Wordmark } from "@/components/brand/wordmark";
import { footerSections } from "@/lib/data/nav";
import { company } from "@/lib/data/company";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)] mt-24">
      <div className="mx-auto max-w-[1280px] px-5 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <Wordmark />
          <p className="text-sm text-[var(--color-neutral)]/60 max-w-xs">
            Custom software and AI-powered systems for growing businesses.
          </p>
          <div className="flex gap-3">
            <a
              href={company.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-neutral)]/60 hover:text-[var(--color-accent)] transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={company.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[var(--color-neutral)]/60 hover:text-[var(--color-accent)] transition-colors"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${company.email}`}
              aria-label="Email"
              className="text-[var(--color-neutral)]/60 hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-[var(--color-neutral)]/60 hover:text-[var(--color-accent)] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-[var(--color-neutral)] mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-neutral)]/60 hover:text-[var(--color-neutral)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-neutral)] mb-4">Contact</h3>
          <address className="not-italic space-y-2 text-sm text-[var(--color-neutral)]/60">
            <p>{company.location}</p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-[var(--color-neutral)]">
                {company.email}
              </a>
            </p>
            <p>
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-neutral)]">
                WhatsApp
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-[var(--color-surface-border)]/60">
        <div className="mx-auto max-w-[1280px] px-5 py-6 text-xs text-[var(--color-neutral)]/40 flex flex-col sm:flex-row gap-2 justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Founded {company.foundedYear} · {company.location}</p>
        </div>
      </div>
    </footer>
  );
}
