import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
//import { Analytics } from "@vercel/analytics/react"
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Abyss Studios",
  description: "Creating immersive gaming experiences that push the boundaries of entertainment",
  keywords: "game studio, entertainment, gaming, game development, indie games, Suryanshu Mittal, Indian Game Studios, Gaming, Mobile Games, PC games, Anime, Studio, Game Studio Delhi, India, Delhi, Indie, Art, Music, New Games, ABYSS, Abyss Studios, ABYSS studios suryanshu mittal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
