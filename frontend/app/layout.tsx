import type { Metadata } from "next";
import { Inter, Libre_Caslon_Display } from "next/font/google";

import "./globals.css";

import { MachineProvider } from "@/context/MachineContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caslon",
});

export const metadata: Metadata = {
  title: "MaintenAI",
  description: "Enterprise AI Maintenance Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${caslon.variable} bg-slate-950 text-white`}
      >
        <MachineProvider>
          {children}
        </MachineProvider>
      </body>
    </html>
  );
}