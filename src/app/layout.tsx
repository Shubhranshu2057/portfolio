import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubhranshu | Java & DSA Developer",
  description: "BCA Student at Bahra University | Passionate Java & DSA Developer | 6 Month Internship Experience at Exeoelnce Technology",
  keywords: ["Shubhranshu", "Java Developer", "DSA", "BCA Student", "Bahra University", "Web Developer", "Spring Boot", "Portfolio"],
  authors: [{ name: "Shubhranshu" }],
  icons: {
    icon: "/download/avatar.png",
  },
  openGraph: {
    title: "Shubhranshu | Java & DSA Developer",
    description: "BCA Student at Bahra University | Passionate Java & DSA Developer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhranshu | Java & DSA Developer",
    description: "BCA Student at Bahra University | Passionate Java & DSA Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
