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

const siteUrl = "https://hashtricks.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hashtricks Technologies — Custom Software & AI Systems",
    template: "%s — Hashtricks Technologies",
  },
  description:
    "Hashtricks Technologies builds custom software and AI-powered systems that reduce manual work and help growing businesses operate smarter. Based in Coimbatore, India.",
  keywords: [
    "custom software development",
    "AI automation",
    "web development",
    "mobile app development",
    "SaaS development",
    "software agency India",
    "Coimbatore software company",
    "AI-powered systems",
    "business automation",
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
    title: "Hashtricks Technologies — Custom Software & AI Systems",
    description:
      "Custom software and AI-powered systems for growing businesses. Based in Coimbatore, India.",
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
      <body className="grain min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-neutral)]">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
