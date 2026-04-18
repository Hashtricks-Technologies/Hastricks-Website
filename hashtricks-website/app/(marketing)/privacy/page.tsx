import type { Metadata } from "next";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hashtricks Technologies collects, uses, and protects your personal information.",
  alternates: { canonical: "https://www.hashtrickstechnologies.com/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "18 April 2026";

const sections = [
  {
    id: "information-we-collect",
    heading: "Information we collect",
    content: [
      {
        type: "p" as const,
        text: "We collect information you provide directly to us and information collected automatically when you use our website.",
      },
      {
        type: "h3" as const,
        text: "Information you provide",
      },
      {
        type: "ul" as const,
        items: [
          "Contact form submissions — your name, email address, company name, selected service, and message",
          "Email communications — any information you include when you contact us directly",
          "Calendly bookings — name, email, and any details you provide when booking a discovery call",
        ],
      },
      {
        type: "h3" as const,
        text: "Information collected automatically",
      },
      {
        type: "ul" as const,
        items: [
          "Usage data — pages visited, time spent, referral source, browser type, and device type via Google Analytics",
          "IP address — collected by Google Analytics and anonymised",
          "Cookies — Google Analytics sets cookies to distinguish users and sessions (see Cookies section below)",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How we use your information",
    content: [
      {
        type: "p" as const,
        text: "We use the information we collect for the following purposes:",
      },
      {
        type: "ul" as const,
        items: [
          "To respond to your enquiry and communicate about potential projects",
          "To send you information you have requested, such as project proposals or call confirmations",
          "To understand how visitors use our website and improve its content and performance",
          "To comply with legal obligations applicable to us under Indian law",
        ],
      },
      {
        type: "p" as const,
        text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
      },
    ],
  },
  {
    id: "third-party-services",
    heading: "Third-party services",
    content: [
      {
        type: "p" as const,
        text: "We use a small number of trusted third-party services to operate our website. Each has its own privacy policy:",
      },
      {
        type: "ul" as const,
        items: [
          "Resend (resend.com) — processes contact form submissions and delivers email notifications to our team. Your form data passes through Resend's infrastructure.",
          "Google Analytics (analytics.google.com) — collects anonymised usage data to help us understand website traffic and improve content.",
          "Calendly (calendly.com) — manages discovery call bookings. Data you enter during booking is governed by Calendly's privacy policy.",
          "Sanity (sanity.io) — our content management system, used to manage website content. No visitor data is stored in Sanity.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    heading: "Cookies",
    content: [
      {
        type: "p" as const,
        text: "Our website uses cookies set by Google Analytics to collect anonymised usage data. These cookies do not identify you personally.",
      },
      {
        type: "ul" as const,
        items: [
          "_ga — distinguishes users. Expires after 2 years.",
          "_ga_* — stores session state. Expires after 2 years.",
        ],
      },
      {
        type: "p" as const,
        text: "You can opt out of Google Analytics tracking at any time by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout, or by disabling cookies in your browser settings.",
      },
    ],
  },
  {
    id: "data-retention",
    heading: "Data retention",
    content: [
      {
        type: "p" as const,
        text: "We retain your contact information for as long as necessary to respond to your enquiry and for a reasonable period thereafter in case of follow-up. If we do not enter into a working relationship, we delete your information within 12 months of last contact.",
      },
      {
        type: "p" as const,
        text: "Google Analytics data is retained for 14 months by default, after which it is automatically deleted.",
      },
    ],
  },
  {
    id: "data-security",
    heading: "Data security",
    content: [
      {
        type: "p" as const,
        text: "We take reasonable technical and organisational measures to protect your information from unauthorised access, loss, or misuse. Our website is served over HTTPS. Access to contact form submissions is restricted to our team.",
      },
      {
        type: "p" as const,
        text: "No method of transmission over the internet is completely secure. While we take reasonable precautions, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights",
    content: [
      {
        type: "p" as const,
        text: "Depending on applicable law, you may have the right to:",
      },
      {
        type: "ul" as const,
        items: [
          "Request access to the personal information we hold about you",
          "Request correction of inaccurate information",
          "Request deletion of your personal information",
          "Withdraw consent where processing is based on consent",
          "Object to processing of your personal information",
        ],
      },
      {
        type: "p" as const,
        text: `To exercise any of these rights, contact us at ${company.email}. We will respond within 30 days.`,
      },
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's privacy",
    content: [
      {
        type: "p" as const,
        text: "Our website is not directed at children under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    content: [
      {
        type: "p" as const,
        text: "We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of our website after any changes constitutes acceptance of the updated policy.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact us",
    content: [
      {
        type: "p" as const,
        text: "If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us:",
      },
      {
        type: "ul" as const,
        items: [
          `Email: ${company.email}`,
          `Company: ${company.name}`,
          `Location: ${company.location}`,
        ],
      },
    ],
  },
];

type Section = (typeof sections)[number];
type ContentBlock = Section["content"][number];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-3xl px-5 pt-24 pb-12 md:pt-32">
          <span className="eyebrow reveal">
            <span className="eyebrow-rule" />
            <span>Legal</span>
          </span>
          <h1 className="mt-6 text-display-xl text-[var(--color-neutral)] reveal">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-xs text-[var(--color-neutral)]/45 reveal">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-6 text-lg text-[var(--color-neutral)]/75 leading-relaxed reveal">
            Hashtricks Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
            committed to protecting your privacy. This policy explains what information we collect,
            how we use it, and your rights in relation to it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        {/* Table of contents */}
        <nav className="mb-12 rounded-2xl border border-[var(--color-surface-border)]/70 bg-[var(--color-secondary)]/50 p-6">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-sky)] mb-4">
            Contents
          </p>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-3 text-sm text-[var(--color-neutral)]/70 hover:text-[var(--color-primary)] transition-colors"
                >
                  <span className="font-mono text-[0.6rem] text-[var(--color-neutral)]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-14">
          {sections.map((section, i) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-[var(--color-primary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-[var(--color-surface-border)]/60" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-neutral)] mb-6">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.map((block, j) => (
                  <ContentRenderer key={j} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ContentRenderer({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return (
      <p className="text-base md:text-lg text-[var(--color-neutral)]/75 leading-relaxed">
        {block.text}
      </p>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="font-display text-lg font-semibold text-[var(--color-neutral)] mt-6">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-2.5 mt-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-base text-[var(--color-neutral)]/70">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}
