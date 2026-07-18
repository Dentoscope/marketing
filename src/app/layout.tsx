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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  }
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
