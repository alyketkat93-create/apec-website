import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | APEC For Contracting",
    default: "APEC | Premium International Construction & MEP Engineering",
  },
  description:
    "APEC is an accredited Class 1 General & MEP Contractor in Saudi Arabia. Specializing in advanced chilled water HVAC, firefighting, electrical infrastructure, and BIM engineering across the Middle East.",
  keywords: [
    "APEC Contracting",
    "شركة أيبك للمقاولات",
    "MEP Contractor Saudi Arabia",
    "Chilled Water Systems Riyadh",
    "HVAC Contracting KSA",
    "BIM Engineering Riyadh",
    "Fire Protection Contractor",
    "MOMRAH Class 1 Contractor",
    "مقاول كهروميكانيك فئة أولى",
    "تكييف مياه مبردة",
  ],
  authors: [{ name: "APEC Engineering & Management" }],
  creator: "APEC For Contracting",
  publisher: "APEC For Contracting",
  metadataBase: new URL("https://www.apec.com.sa"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-SA": "/ar",
    },
  },
  openGraph: {
    title: "APEC | Premium International Construction & MEP Engineering",
    description:
      "Class 1 accredited electromechanical and general contractor backed by over 35 years of engineering heritage and certified BIM execution.",
    url: "https://www.apec.com.sa",
    siteName: "APEC For Contracting",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "APEC Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-arch-950 text-arch-200 antialiased selection:bg-brand-500 selection:text-white flex flex-col min-h-screen bg-blueprint">
        <LanguageProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
