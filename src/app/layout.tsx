import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ivan Saldano",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
