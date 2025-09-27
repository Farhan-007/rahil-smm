import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StillMotionPictures",
  description:
    "We help brands grow with data-driven marketing strategies, high-impact design, and conversion-focused campaigns.",
  openGraph: {
    title: "StillMotionPictures",
    description:
      "We help brands grow with data-driven marketing strategies, high-impact design, and conversion-focused campaigns.",
    url: "https://stillmotionpictures.in/", // replace with your actual domain
    siteName: "StillMotionPictures",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "StillMotion Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{fontFamily:'myFont,sans-serif'}}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
