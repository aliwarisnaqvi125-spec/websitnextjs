import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CityPulse | Social & Quizzes",
  description: "Engaging quizzes, social tasks, and top city insights for UK and US.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.effectivegatecpm.com/cr34x6udpd?key=0d0d7361f4e6a1ddd77010517bc012c0"></script>
      </head>
      <body className={inter.className}>
        <script src="https://quge5.com/88/tag.min.js" data-zone="206034" async data-cfasync="false"></script>
        <Navbar />
        {children}
        <Footer />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
