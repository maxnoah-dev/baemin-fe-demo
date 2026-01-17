import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baemin FE Demo",
  description: "Food delivery demo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
