import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H S Hair Studio & Beauty | Premium Salon in Serampore",
  description: "Premium hair, beauty and bridal services at H S Hair Studio & Beauty, Mahesh, Serampore. Book your appointment today.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
