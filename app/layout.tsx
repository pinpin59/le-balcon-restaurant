import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: "Le Balcon — Restaurant Gastronomique à Paris",
  description:
    "Le Balcon, restaurant gastronomique perché au-dessus de Paris. Une cuisine pure, brute et moderne. Réservez votre table dès maintenant.",
  keywords: [
    "restaurant gastronomique Paris",
    "Le Balcon",
    "cuisine française",
    "réservation restaurant",
    "Champs-Élysées",
  ],
  openGraph: {
    title: "Le Balcon — Restaurant Gastronomique à Paris",
    description:
      "Une cuisine pure, brute et moderne. Réservez votre table au Balcon.",
    url: "https://le-balcon.fr",
    siteName: "Le Balcon",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
