import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FavoritesProvider from "@/components/FavoritesProvider";
import AIAssistant from "@/components/AIAssistant";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nefis & Özgün | Türk Mutfağı Tarif Platformu",
  description: "Geleneksel sıcak yemeklerden zeytinyağlılara, mezelerden şerbetli tatlılara uzanan, yapay zeka destekli ve iştah açıcı görsellerle donatılmış en kapsamlı dijital Türk yemekleri kitabı.",
  // Note: app/icon.png and app/apple-icon.png are auto-detected by Next.js App Router
  // and automatically generate the correct <link> tags — no manual `icons` field needed.
  // This avoids the icon-pinning mismatch issue encountered in the prior project.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased min-h-screen flex flex-col selection:bg-terracotta/10 selection:text-terracotta overflow-x-hidden w-full">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
          <AIAssistant />
        </FavoritesProvider>
      </body>
    </html>
  );
}