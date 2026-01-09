import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "CV — Hapssatou Sy",
  description: "CV Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} ${pacifico.variable}`}>
        {children}
      </body>
    </html>
  );
}
