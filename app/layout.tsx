import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "mori-design-0807.chenr1112.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    title: "DAIKONAUT DESIGN — Visual & Creative Practice",
    description: "以策划与审美为起点，塑造个性体验。视觉设计、AIGC、创意策划、品牌广告与文创设计。",
    metadataBase: new URL(origin),
    openGraph: {
      title: "DAIKONAUT DESIGN — Visual & Creative Practice",
      description: "视觉设计、AIGC、创意策划、品牌广告与文创设计。",
      type: "website",
      url: origin,
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "DAIKONAUT DESIGN" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "DAIKONAUT DESIGN — Visual & Creative Practice",
      description: "视觉设计、AIGC、创意策划、品牌广告与文创设计。",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
