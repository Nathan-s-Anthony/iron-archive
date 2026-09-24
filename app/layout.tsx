import type { Metadata } from "next";
import { Manrope, Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { NavigationEventsProvider } from "./providers/navigationProvider";
import Footer from "./components/footer";

const frauncesSans = Fraunces({
  variable: "--font-fraunces-sans",
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
});

const manRopeMono = Manrope({
  variable: "--font-manrope-mono",
  subsets: ["latin"],
  weight: ["500", "400", "300"],
});
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["500", "400", "300"],
});
export const metadata: Metadata = {
  title: "The Iron Archive - Your one stop military history",
  description: "All vehicles from all theatres of war",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${frauncesSans.variable} ${manRopeMono.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
