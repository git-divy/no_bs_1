import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hbtucrypto.club"),
  title: "HBTU Crypto Club - Building the Future of Blockchain",
  description: "Join HBTU's premier blockchain and cryptocurrency community. Learn, build, and innovate in the world of decentralized technology with workshops, hackathons, and expert mentorship.",
  keywords: ["HBTU", "Crypto Club", "Blockchain", "Cryptocurrency", "DeFi", "Web3", "Hackathon", "Workshop"],
  authors: [{ name: "HBTU Crypto Club" }],
  creator: "HBTU Crypto Club",
  publisher: "HBTU Crypto Club",
  openGraph: {
    title: "HBTU Crypto Club - Building the Future of Blockchain",
    description: "Join HBTU's premier blockchain and cryptocurrency community.",
    url: "https://hbtucrypto.club",
    siteName: "HBTU Crypto Club",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HBTU Crypto Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HBTU Crypto Club - Building the Future of Blockchain",
    description: "Join HBTU's premier blockchain and cryptocurrency community.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
