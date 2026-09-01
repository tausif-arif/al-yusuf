import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alyusuf.com"),
  title: "Al Yusuf Hajj & Umrah | Trusted Economy Package 2026 – Patna",
  description:
    "Al Yusuf Tour & Travels Company, Patna — trusted Hajj & Umrah operator since 2010. All-inclusive Economy Package ₹87,000/- with flights, hotels near Haram, visa, meals, and zam zam water.",
  openGraph: {
    title: "Al Yusuf Hajj & Umrah",
    description: "A Journey of Faith, A Lifetime of Reward. Trusted Economy Packages from Patna.",
    url: "https://fabulous-bombolone-ad8e0c.netlify.app/",
    siteName: "Al Yusuf Tour & Travels",
    images: [
      {
        url: "/logo_al.png",
        width: 1200,
        height: 630,
        alt: "Al Yusuf Hajj & Umrah Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Yusuf Hajj & Umrah",
    description: "A Journey of Faith, A Lifetime of Reward. Trusted Economy Packages from Patna.",
    images: ["/logo_al.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmMono.variable}`}
    >
      <body className="bg-[var(--background)] text-[var(--foreground)] font-sans min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}