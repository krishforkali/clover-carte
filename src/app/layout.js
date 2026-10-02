import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import Analytics from "@/components/common/Analytics";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://clovercarte.com"),

  title: {
    default: "Coffee Vending Machine Manufacturer in India | Clover Carte",
    template: "%s ",
  },

  description:
    "Clover Carte manufactures smart coffee, snack, beverage and customized vending machines in India with cloud monitoring, cashless payments and retail automation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={plusJakartaSans.className}
    >
      <body className="font-[var(--font-plus-jakarta)]">
        <Header />

        <main className="lg:pt-[90px] pt-[60px]">
          {children}
        </main>

        <Footer />

        <WhatsAppButton />

        <ScrollToTop />

        <Analytics />
      </body>
    </html>
  );
}