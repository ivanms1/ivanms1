import { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ivan Saldano",
  description: "Welcome to my website",
  keywords: "ivan saldano, ivanms1, ivanms, ivan, saldano, blog, website",
  creator: "Ivan Saldano",
  openGraph: {
    title: "Ivan Saldano",
    description: "Welcome to my website",
    url: "https://www.ivansaldano.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
