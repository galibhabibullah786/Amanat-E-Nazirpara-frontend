import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amanat-E-Nazirpara | Community Mosque Project",
  description: "Join us in building our community mosque through transparency, trust, and collective effort. View contributions, committees, and our journey.",
  keywords: ["mosque", "community", "donation", "transparency", "Nazirpara", "Bangladesh"],
  authors: [{ name: "Amanat-E-Nazirpara Committee" }],
  openGraph: {
    title: "Amanat-E-Nazirpara | Community Mosque Project",
    description: "Building our sacred space together through community contributions",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
