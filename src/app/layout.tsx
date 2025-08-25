import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import MouseTrailEffect from "@/components/ui/mouse-trail-effect";
import { ThemeProvider } from "@/components/ui/theme-provider";

import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import { Toaster } from "../components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empowering Communities Through Cooperative Ownership",
  description:
    "Cooperatives embody the power of community, where shared ownership and mutual aid transform economic challenges into opportunities for progress and empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <MouseTrailEffect
            color="primary"
            effect="dots"
            maxPoints={1000}
            size={10}
          />
          <Navbar />

          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
