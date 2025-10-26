import type { Metadata } from "next";
import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easy pay",
  description: "Pay fast and smarter from anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${outfit.className} ${urbanist.className} antialiased text-secondary`}
      >
        <header>
          <Header></Header>
        </header>
        <main>{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
