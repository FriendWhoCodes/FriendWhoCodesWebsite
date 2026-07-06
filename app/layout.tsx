import type { Metadata } from "next";
import { Fraunces, Spline_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/fx/RevealObserver";

const heading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
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
    "Alok Sharma — senior software engineer, 10+ years in distributed systems, observability and AI agents at Atlan, Confluent and Sumo Logic.",
  openGraph: {
    title: "Alok Sharma | Friend Who Codes",
    description:
      "Senior software engineer — distributed systems, observability, AI agents. 10+ years at Atlan, Confluent and Sumo Logic.",
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
      className={`${heading.variable} ${body.variable} ${code.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-paper text-ink">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RevealObserver />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
