import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const arabicDisplayFont = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahserifdisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahserifdisplay-Black.otf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-arabic-display",
});

const arabicTextFont = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahseriftext-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahseriftext-Black.otf",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-arabic-text",
});



export const metadata: Metadata = {
  title: "Dentoscope — Advanced Clinical Imaging & Patient Records",
  description: "A high-performance medical assistant for dental clinics. Stream RTSP microscope feeds with sub-second latency, capture snapshots, and organize patient media records.",
  keywords: ["dental clinical imaging", "dental microscope feed", "rtsp dental streaming", "patient record organization", "dentistry workstation", "dentoscope app", "sterile clinic coordination"],
  authors: [{ name: "Dentoscope Team" }],
  icons: {
    icon: "logo.png",
    apple: "logo.png",
  },
  openGraph: {
    title: "Dentoscope — Advanced Clinical Imaging & Patient Records",
    description: "A high-performance medical assistant for dental clinics. Stream RTSP microscope feeds with sub-second latency, capture snapshots, and organize patient media records.",
    type: "website",
    locale: "en_US",
    siteName: "Dentoscope",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentoscope — Advanced Clinical Imaging & Patient Records",
    description: "A high-performance medical assistant for dental clinics. Stream RTSP microscope feeds with sub-second latency, capture snapshots, and organize patient media records.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${arabicDisplayFont.variable} ${arabicTextFont.variable}`}>
      <body className="antialiased min-h-screen bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
