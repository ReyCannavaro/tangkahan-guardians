import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tangkahan: Guardians of the Leuser",
  description:
    "Interactive static landing page about Tangkahan, community ecotourism, CRU elephant patrols, and Leuser forest conservation.",
  keywords: [
    "Tangkahan",
    "Leuser",
    "ecotourism",
    "SDG 8",
    "SDG 15",
    "Conservation Response Unit",
    "Sumatran elephant",
  ],
  openGraph: {
    title: "Tangkahan: Guardians of the Leuser",
    description:
      "A scroll-driven story about Tangkahan's community-led conservation journey.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-forest-800 text-earth-100">
        <a href="#main-content" className="skip-link">
          Lewati navigasi
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
