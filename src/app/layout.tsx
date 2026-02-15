import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Balcon Restaurant",
  description: "Welcome to Le Balcon Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
