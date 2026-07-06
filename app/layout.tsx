import type { Metadata } from "next";
import { Syne, Fraunces, Spline_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/fx/RevealObserver";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { Cursor } from "@/components/fx/Cursor";
import { Preloader } from "@/components/fx/Preloader";

const heading = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
});

const serifAccent = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif-accent",
  axes: ["opsz", "SOFT", "WONK"],
});

const body = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const code = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://friendwhocodes.com"),
  title: {
    default: "Alok Sharma | Friend Who Codes",
    template: "%s | Friend Who Codes",
  },
  description:
    "Alok Sharma — senior software engineer in India. I build web apps, Android apps, and AI-assisted tools, and write about how they get made.",
  openGraph: {
    title: "Alok Sharma | Friend Who Codes",
    description:
      "Senior software engineer in India. Web apps, Android apps, and AI-assisted tools.",
    url: "https://friendwhocodes.com",
    siteName: "Friend Who Codes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@FriendWhoCodes",
    creator: "@FriendWhoCodes",
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
      suppressHydrationWarning
      className={`${heading.variable} ${serifAccent.variable} ${body.variable} ${code.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-paper text-ink">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Preloader />
          <SmoothScroll />
          <Cursor />
          <RevealObserver />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
