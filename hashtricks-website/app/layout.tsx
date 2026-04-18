import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Lexend, Darker_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", display: "swap" });
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb-mono", display: "swap" });

const siteUrl = "https://www.hashtrickstechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Software Development Company in Coimbatore — Hashtricks Technologies",
    template: "%s — Hashtricks Technologies",
  },
  description:
    "Hashtricks Technologies is a software development company in Coimbatore building custom software, AI automation, and web applications for growing businesses across India.",
  keywords: [
    "software development company in Coimbatore",
    "AI automation Coimbatore",
    "custom software development Coimbatore",
    "web development company Coimbatore",
    "AI automation for small business India",
    "software agency Coimbatore",
    "business process automation India",
    "mobile app development Coimbatore",
    "SaaS development India",
    "IT company Coimbatore Tamil Nadu",
  ],
  authors: [{ name: "Hashtricks Technologies", url: siteUrl }],
  creator: "Hashtricks Technologies",
  publisher: "Hashtricks Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: "Hashtricks Technologies",
    url: siteUrl,
    title: "Software Development Company in Coimbatore — Hashtricks Technologies",
    description:
      "Custom software, AI automation, and web development from Coimbatore. We help businesses across India reduce manual work and operate smarter.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Hashtricks Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashtricks Technologies — Custom Software & AI Systems",
    description:
      "Custom software and AI-powered systems for growing businesses. Based in Coimbatore, India.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: siteUrl },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hashtricks Technologies",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Hashtricks Technologies builds custom software and AI-powered systems that reduce manual work and help growing businesses operate smarter.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hashtrickstechnologies@gmail.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.linkedin.com/company/114703961",
    "https://www.instagram.com/hashtricks_technologies/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${darkerGrotesque.variable} ${jbMono.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="grain min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-neutral)]">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
