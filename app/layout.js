import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CityPulse | Social & Quizzes",
  description: "Engaging quizzes, social tasks, and top city insights for UK and US.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9660479171050292" crossOrigin="anonymous"></script>
        <script src="https://pl28573088.effectivegatecpm.com/0c/b2/2b/0cb22b55a7860d05f78f653d37f30539.js"></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        {/* Bottom Left Ad Script */}
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
          <script src="https://pl28573305.effectivegatecpm.com/e0/d8/5d/e0d85d1d28b6a9ad9aef1fc104c8a848.js"></script>
        </div>
      </body>
    </html>
  );
}
