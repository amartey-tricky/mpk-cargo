import type { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "MPK Cargo Logistics";
const description = "Your total logistics partner for importing from China"

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
  title: title,
  description: description,
  openGraph: {
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "MPK Cargo Logistics",
      },
    ],
    title: title,
    description: description,
    type: "website",
    url: "https://mpkcargologistics.com",
    siteName: "MPK Cargo Logistics",
    locale: "en_US",
  },
  twitter: {
    site: "@mpk_cargo",
    title: "MPK Cargo Logistics",
    card: "summary_large_image",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": "large",
      "max-snippet": -1,
    }
  }
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
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:absolute dark:top-0 dark:z-[-2] dark:h-screen dark:w-screen dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]"></div>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
