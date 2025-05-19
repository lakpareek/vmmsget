import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Security Guard eligibility test",
  description: "Check your elegibility for the post of Vishal Mega Mart Security Guard"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full overflow-y-auto max-w-[600px] border-amber-100 border-3 border-dotted flex flex-col items-center justify-center rounded-lg p-4 m-auto mt-10 h-sc">
          {children}
          <Analytics />
        </div>
        
      </body>
    </html>
  );
}
