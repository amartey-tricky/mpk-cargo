import type { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ogImageUrl = getCldOgImageUrl({
  src: "logo_jch8fh",
  crop: "thumb",
  format: "jpg",
});

const twitterImageUrl = getCldOgImageUrl({
  src: "logo_jch8fh",
  crop: "thumb",
  format: "webp",
});

export const metadata: Metadata = {
  title: "MPK Cargo Logistics",
  description: "Your total logistics partner for importing from China",
  openGraph: {
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "MPK Cargo Logistics",
      },
    ],
  },
  twitter: {
    site: "@mpk_cargo",
    title: "MPK Cargo Logistics",
    description: "Your total logistics partner for importing from China",
    images: [
      {
        url: twitterImageUrl,
        width: 1200,
        height: 630,
        alt: "MPK Cargo Logistics",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
