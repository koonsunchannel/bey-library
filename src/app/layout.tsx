import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar"; // Fixed the navbar import
import { Analytics } from "@vercel/analytics/react";
import BackToTopButton from "@/components/BackToTopButton"

export const metadata: Metadata = {
  title: "Beyblade X Library - Parts Collection",
  description: "Library for Beyblade X parts collection",
  icons: {
    icon: [
      { url: "/public/favicon.ico", type: "image/x-icon" },
      { url: "/public/favicon.png", type: "image/png" },
    ],
  },
};


import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col cyber-grid">
          <NavBar />
          <div className="flex-1">
            <main>{children}</main>
          </div>
          <footer className="border-t py-6 md:py-8">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
              <p className="text-center text-sm text-muted-foreground md:text-left">
                &copy; Beyblade X LIBRARY. PATCH DATE 05/2025.
              </p>
              <p className="text-center text-sm text-muted-foreground md:text-right">
                Beyblade X Japan. library fans edit.
              </p>
            </div>
          </footer>
        </div>
        <SpeedInsights />
        <Analytics />
        <BackToTopButton />
      </body>
    </html>
  );
}