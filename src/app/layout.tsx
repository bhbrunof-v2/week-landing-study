import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usando Inter como alternativa similar à Satoshi
// Para usar Satoshi localmente, substitua por:
// import localFont from "next/font/local";
// const satoshi = localFont({ src: "./path/to/Satoshi-Variable.woff2", variable: "--font-sans" });
const satoshi = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Lab",
  description: "Uma landing page por semana para treinar Cursor + shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${satoshi.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
