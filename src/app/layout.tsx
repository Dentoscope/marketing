import type { Metadata } from "next";
import { Inter, Alexandria } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "variable",
});

const alexandria = Alexandria({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: "variable"
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
    <html lang="en" dir="rtl" className={`${inter.variable} ${alexandria.variable}`}>
      <body className="antialiased min-h-screen bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
