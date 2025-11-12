import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['400', '600', '700'],
});

const fontSerif = Poppins({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: "Drywall Pro",
  description: "Curso Profissionalizante — Especialista em Drywall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
