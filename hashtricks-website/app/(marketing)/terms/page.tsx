import type { Metadata } from "next";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing use of the Hashtricks Technologies website and services.",
  alternates: { canonical: "https://www.hashtrickstechnologies.com/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "18 April 2026";

const sections = [
  {
    id: "acceptance",
    heading: "Acceptance of terms",
    content: [
      {
        type: "p" as const,
        text: `By accessing or using the website at www.hashtrickstechnologies.com (the "Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.`,
      },
      {
        type: "p" as const,
        text: `These Terms apply to all visitors, enquirers, and clients of Hashtricks Technologies ("we", "our", "us"), a company registered and operating in Coimbatore, Tamil Nadu, India.`,
      },
    ],
  },
  {
    id: "services",
    heading: "Our services",
    content: [
      {
        type: "p" as const,
        text: "Hashtricks Technologies provides custom software development, web development, mobile app development, AI/ML solutions, AI automation, cloud and DevOps services, SaaS development, UI/UX design, and technology consulting.",
      },
      {
        type: "p" as const,
        text: "The information on this Site is for general informational purposes. It does not constitute a binding offer or guarantee of availability, pricing, or timelines. All engagements are governed by a separate written agreement signed between us and the client.",
      },
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    content: [
      {
        type: "p" as const,
        text: "All content on this Site — including text, graphics, logos, and code — is the property of Hashtricks Technologies or its licensors and is protected under applicable copyright and intellectual property laws.",
      },
      {
        type: "p" as const,
        text: "You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.",
      },
      {
        type: "p" as const,
        text: "For client projects: ownership of deliverables (source code, designs, and related assets) is governed by the terms of the individual project agreement. Unless otherwise agreed in writing, full ownership transfers to the client upon receipt of final payment.",
      },
    ],
  },
  {
    id: "contact-form",
    heading: "Contact form and communications",
    content: [
      {
        type: "p" as const,
        text: "When you submit an enquiry through our contact form or communicate with us via email or WhatsApp, you consent to us using that information to respond to your enquiry and evaluate a potential engagement.",
      },
      {
        type: "p" as const,
        text: "Submitting an enquiry does not create a contractual relationship. No engagement begins until both parties have signed a written agreement.",
      },
      {
        type: "p" as const,
        text: "We do not send unsolicited marketing communications. If you receive an email from us, it is in direct response to your enquiry.",
      },
    ],
  },
  {
    id: "prohibited-use",
    heading: "Prohibited use",
    content: [
      {
        type: "p" as const,
        text: "You agree not to use this Site to:",
      },
      {
        type: "ul" as const,
        items: [
          "Submit false, misleading, or fraudulent information",
          "Attempt to gain unauthorised access to any part of the Site or its systems",
          "Transmit viruses, malware, or any other harmful code",
          "Scrape or harvest data from the Site using automated tools",
          "Violate any applicable local, national, or international law or regulation",
          "Impersonate any person or entity or misrepresent your affiliation with any person or entity",
        ],
      },
    ],
  },
  {
    id: "third-party-links",
    heading: "Third-party links",
    content: [
      {
        type: "p" as const,
        text: "This Site may contain links to third-party websites including Calendly, LinkedIn, Instagram, and WhatsApp. These links are provided for convenience only.",
      },
      {
        type: "p" as const,
        text: "We do not control third-party sites and are not responsible for their content, privacy practices, or terms. Visiting a linked site is at your own risk.",
      },
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    content: [
      {
        type: "p" as const,
        text: `This Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
      },
      {
        type: "p" as const,
        text: "We do not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components. We reserve the right to modify, suspend, or discontinue any part of the Site at any time without notice.",
      },
      {
        type: "p" as const,
        text: "Case study results and metrics described on this Site reflect outcomes achieved for specific clients under specific circumstances. They do not constitute a guarantee of similar results for any future engagement.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of liability",
    content: [
      {
        type: "p" as const,
        text: "To the maximum extent permitted by applicable law, Hashtricks Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this Site or any information contained on it.",
      },
      {
        type: "p" as const,
        text: "Our total liability for any claim arising from your use of this Site shall not exceed INR 1,000 (one thousand rupees).",
      },
      {
        type: "p" as const,
        text: "Nothing in these Terms excludes liability for fraud, death, or personal injury caused by our negligence, or any other liability that cannot be excluded by law.",
      },
    ],
  },
  {
    id: "governing-law",
    heading: "Governing law",
    content: [
      {
        type: "p" as const,
        text: "These Terms are governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000 and its amendments.",
      },
      {
        type: "p" as const,
        text: "Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Coimbatore, Tamil Nadu, India.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    content: [
      {
        type: "p" as const,
        text: "We may update these Terms from time to time. The date at the top of this page shows when they were last revised. Continued use of the Site after any changes constitutes your acceptance of the updated Terms.",
      },
      {
        type: "p" as const,
        text: "We recommend reviewing this page periodically.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact us",
    content: [
      {
        type: "p" as const,
        text: "If you have questions about these Terms, please contact us:",
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

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 font-mono text-xs text-[var(--color-neutral)]/45 reveal">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-6 text-lg text-[var(--color-neutral)]/75 leading-relaxed reveal">
            Please read these Terms of Service carefully before using our website. By accessing the
            site, you agree to be bound by these terms.
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
