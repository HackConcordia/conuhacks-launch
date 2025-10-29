import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import BackgroundOverlay from "./components/BackgroundOverlay";
import FloatingBeeCursor from "./components/FloatingBeeCursor";
import Script from "next/script";
import { TranslationProvider } from './i18n/TranslationContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CONUHACKS X | HACKCONCORDIA",
  description:
    "Conuhacks X is Concordia University's annual 24-hour hackathon, organized by HackConcordia, a student-run tech community.",
  openGraph: {
    title: "CONUHACKS X | HACKCONCORDIA",
    description:
      "Conuhacks X is Concordia University's annual 24-hour hackathon, organized by HackConcordia, a student-run tech community.",
    url: "https://www.conuhacks.io",
    siteName: "CONUHACKS X",
    images: [
      {
        url: "https://www.hackconcordia.io/imgs/HC_logo.png",
        width: 800,
        height: 600,
        alt: "HackConcordia Logo",
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "HackConcordia",
    description:
      "HackConcordia is a student-run tech community at Concordia University, organizing ConUHacks, Quebec's largest 24-hour hackathon.",
    images: ["https://www.hackconcordia.io/imgs/HC_logo.png"],
    creator: "@HackConcordia",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const lang = "fr"; // default is French
  return (
    <html lang={lang}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N7VZ5JBTX2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N7VZ5JBTX2');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider> 
          <div className="hidden md:flex">
            <BackgroundOverlay />
          </div>
          <main className="">
            <div className="hidden md:flex">
              <FloatingBeeCursor />
            </div>
            {children}
          </main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
