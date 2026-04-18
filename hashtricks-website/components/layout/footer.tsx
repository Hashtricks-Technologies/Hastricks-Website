import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/brand/social-icons";
import { footerSections } from "@/lib/data/nav";
import { company } from "@/lib/data/company";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)] mt-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 pt-20 pb-8">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <Link href="/" aria-label="Hashtricks home" className="inline-block group">
              <span className="font-display font-black leading-[0.85] tracking-[-0.04em] text-[clamp(3.5rem,9vw,7rem)] text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors">
                Hashtricks
              </span>
            </Link>
            <p className="text-base text-[var(--color-neutral)]/65 max-w-sm leading-relaxed">
              {company.tagline}
            </p>
            <div className="flex gap-2">
              <SocialBtn href={company.socials.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href={company.socials.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href={`mailto:${company.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href={company.whatsappUrl} label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </SocialBtn>
            </div>
          </div>

          <div className="md:col-span-7 grid gap-10 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-sky)]">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-neutral)]/70 hover:text-[var(--color-primary)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-sky)]">
                Contact
              </h3>
              <address className="not-italic mt-4 space-y-3 text-sm text-[var(--color-neutral)]/70">
                <p>{company.location}</p>
                <p>
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {company.email}
                  </a>
                </p>
                <p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    WhatsApp
                  </a>
                </p>
                <p>
                  <a
                    href={company.bookCallUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    Book a call
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 horizon-line w-full" />

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between text-xs font-mono uppercase tracking-[0.18em] text-[var(--color-neutral)]/45">
          <p>© {new Date().getFullYear()} {company.name}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-primary)] transition-colors">
              Privacy Policy
            </Link>
            <p>Founded {company.foundedYear} · {company.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-surface-border)] text-[var(--color-neutral)]/70 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
    >
      {children}
    </a>
  );
}
