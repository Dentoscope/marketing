import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--main-font",
  subsets: ["latin", "arabic"],
  weight: "variable"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dentoscope.tech"),
  title: "Dentoscope — The Complete Digital Platform for Dental Clinics",
  description: "One platform for your entire dental practice: patient records, zero-lag microscope streaming, 3D case presentations, appointment scheduling, and digital prescriptions. Runs 100% locally with zero cloud dependencies.",
  keywords: [
    "dental practice management software",
    "dental clinic platform",
    "dental microscope streaming",
    "3D dental case presentation",
    "dental appointment scheduling",
    "digital dental prescriptions",
    "dental patient records",
    "offline dental software",
    "dentoscope app"
  ],
  authors: [{ name: "Dentoscope Team" }],
  icons: {
    icon: "logo.png",
    apple: "logo.png",
  },
  openGraph: {
    title: "Dentoscope — The Complete Digital Platform for Dental Clinics",
    description: "Manage patient records, stream your microscope live, schedule appointments, write digital prescriptions, and present 3D treatment plans — all from one local platform.",
    type: "website",
    locale: "en_US",
    siteName: "Dentoscope",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentoscope — The Complete Digital Platform for Dental Clinics",
    description: "Manage patient records, stream your microscope live, schedule appointments, write digital prescriptions, and present 3D treatment plans — all from one local platform.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Dentoscope",
  "operatingSystem": "Windows, macOS, iPadOS",
  "applicationCategory": "MedicalApplication",
  "description": "The complete digital platform for dental Clinics: patient records, zero-lag microscope streaming, 3D treatment presentation, appointment scheduling, and digital prescriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alexandria.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
