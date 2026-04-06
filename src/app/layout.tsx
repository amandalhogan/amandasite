import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amanda L. Hogan",
  description: "Amanda L. Hogan — portfolio and digital garden.",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/favicon/a_logo_small.jpg" />
        <link rel="icon" type="image/jpeg" href="/favicon/a_logo_small.jpg" />
        <link rel="shortcut icon" href="/favicon/a_logo_small.jpg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn(inter.className)}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
