import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Head from "next/head";
// import { NavBar } from "@/shared/Navbar";
// import Footer from "@/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pali Group Service LLC",
  description:
    "Pali Group Service LLC offers premium services tailored to your needs. Explore our professional solutions.",
  authors: [{ name: "Pali Group Service LLC" }],
  keywords: [
    "Pali Group Service",
    "Professional Services",
    "Tailored Solutions",
    "Business Solutions",
    "Consulting",
  ],
  metadataBase: new URL("https://www.paligroupservices.com"), 
  openGraph: {
    title: "Pali Group Service LLC",
    description:
      "Pali Group Service LLC provides top-notch professional solutions tailored to your business needs.",
    url: "https://www.paligroupservices.com",
    siteName: "Pali Group Service LLC",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", 
        height: 630,
        alt: "Pali Group Service LLC",
      },
    ],
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/images/ficon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/ficon.png" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preload Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&display=swap"
          as="style"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <NavBar /> */}
        {children}
        <Toaster />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
