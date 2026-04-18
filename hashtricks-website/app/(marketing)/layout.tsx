import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
