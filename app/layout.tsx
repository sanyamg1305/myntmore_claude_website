import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Myntmore | B2B Lead Generation & Cold Outreach Agency",
  description:
    "Myntmore runs precision cold outreach and account-based marketing campaigns that book qualified meetings — so your sales team never chases cold leads again. 1,200+ meetings booked. $48M+ pipeline generated.",
  keywords: [
    "B2B lead generation",
    "cold outreach agency",
    "account-based marketing",
    "ABM",
    "sales development",
    "qualified meetings",
    "B2B pipeline",
    "outbound sales",
    "SDR agency",
    "myntmore",
  ],
  authors: [{ name: "Myntmore" }],
  creator: "Myntmore",
  metadataBase: new URL("https://myntmore.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myntmore.com",
    siteName: "Myntmore",
    title: "Myntmore | B2B Lead Generation & Cold Outreach Agency",
    description:
      "We fill your pipeline. You close the deals. Precision cold outreach and ABM campaigns that book qualified meetings at scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Myntmore — B2B Lead Generation & Cold Outreach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myntmore | B2B Lead Generation & Cold Outreach Agency",
    description:
      "We fill your pipeline. You close the deals. Precision cold outreach and ABM campaigns that book qualified meetings at scale.",
    images: ["/og-image.png"],
    creator: "@myntmore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
