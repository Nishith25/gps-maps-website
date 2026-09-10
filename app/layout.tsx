import type {
  Metadata,
} from "next";

import { Geist } from "next/font/google";

import {
  getSiteContent,
} from "@/lib/content";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const content =
    await getSiteContent();

  return {
    title: {
      default:
        content.seo.title,
      template:
        `%s | ${content.brand.shortName}`,
    },

    description:
      content.seo.description,

    keywords:
      content.seo.keywords,

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          geist.className
        }
      >
        {children}
      </body>
    </html>
  );
}