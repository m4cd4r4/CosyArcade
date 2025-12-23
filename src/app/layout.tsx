import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "CosyArcade - Your Cosy Corner for Retro Gaming",
  description: "Play classic arcade, console, and computer games from the 70s, 80s, 90s and beyond. Free, legal, and right in your browser.",
  keywords: ["retro games", "arcade", "emulator", "NES", "SNES", "Genesis", "Game Boy", "free games", "browser games"],
  authors: [{ name: "CosyArcade" }],
  openGraph: {
    title: "CosyArcade - Your Cosy Corner for Retro Gaming",
    description: "Play classic arcade, console, and computer games from the 70s, 80s, 90s and beyond.",
    type: "website",
    locale: "en_IE",
    siteName: "CosyArcade",
  },
  twitter: {
    card: "summary_large_image",
    title: "CosyArcade - Your Cosy Corner for Retro Gaming",
    description: "Play classic arcade, console, and computer games from the 70s, 80s, 90s and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="site-wrapper">
            <Navbar />
            <div className="site-content">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
