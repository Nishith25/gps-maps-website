import type {
  Metadata,
} from "next";

import {
  Geist,
} from "next/font/google";

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
    applicationName:
      content.brand.name,

    title: {
      default:
        content.seo.title,

      template:
        `%s | ${content.brand.name}`,
    },

    description:
      content.seo.description,

    keywords:
      content.seo.keywords,

    icons: {
      icon: [
        {
          url: "/app-icon.png",
          type: "image/png",
        },
      ],

      apple:
        "/app-icon.png",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
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