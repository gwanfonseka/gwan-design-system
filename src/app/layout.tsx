import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gwan.dev"),
  title: "GWAN Design System",
  description:
    "A high-performance reactive component library engineered for developers who demand surgical precision and scalable aesthetics.",
  openGraph: {
    url: "https://gwan.dev/home",
    type: "website",
    title: "GWAN Design System",
    description:
      "A high-performance reactive component library engineered for developers who demand surgical precision and scalable aesthetics.",
    images: [
      {
        url: "/images/gwan-dev-og.jpg",
        width: 1200,
        height: 630,
        alt: "GWAN Design System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GWAN Design System",
    description:
      "A high-performance reactive component library engineered for developers who demand surgical precision and scalable aesthetics.",
    images: ["/images/gwan-dev-og.jpg"],
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
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
