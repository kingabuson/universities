import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tracxn for Universities",
  description:
    "Empowering academic institutions with global market insights, enabling them to conduct thorough research for case-studies and fuel the entrepreneurial spirit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
