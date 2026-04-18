import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://hashtricks.tech"),
  title: {
    default: "Hashtricks Technologies — Custom software and AI-powered systems",
    template: "%s — Hashtricks Technologies",
  },
  description:
    "Hashtricks Technologies builds custom software and AI-powered systems that reduce manual work and help growing businesses operate smarter.",
  openGraph: {
    type: "website",
    siteName: "Hashtricks Technologies",
    description:
      "Custom software and AI-powered systems for mid-sized companies ready to scale smarter.",
  },
  twitter: { card: "summary_large_image" },
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
      </body>
    </html>
  );
}
