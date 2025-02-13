import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Ataullah - Frontend Developer",
  description:
    "Portfolio of Md Ataullah, a Frontend Developer specializing in modern web technologies and AI integrations.",
  keywords:
    "Md Ataullah, Frontend Developer, React, Next.js, TypeScript, AI, Web Development, Portfolio",
  authors: [{ name: "Md Ataullah", url: "https://ataullah.vercel.app" }],
  openGraph: {
    title: "Md Ataullah - Frontend Developer",
    description:
      "Explore the portfolio of Md Ataullah, a Frontend Developer with a passion for modern web technologies.",
    url: "https://ataullah.vercel.app",
    siteName: "Md Ataullah Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/mdataullah/image/upload/v1739435780/md_ataullah_aqhvsf.png",
        width: 800,
        height: 600,
        alt: "Md Ataullah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/mdataullah/image/upload/v1739450011/ataullah_s_favicon_p41zge.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/mdataullah/image/upload/v1739450011/ataullah_s_favicon_p41zge.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut:
      "https://res.cloudinary.com/mdataullah/image/upload/v1739450011/ataullah_s_favicon_p41zge.png",
    apple:
      "https://res.cloudinary.com/mdataullah/image/upload/v1739450011/ataullah_s_favicon_p41zge.png",
  },
  manifest: "https://ataullah.vercel.app/manifest.json",
  metadataBase: new URL("https://ataullah.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
