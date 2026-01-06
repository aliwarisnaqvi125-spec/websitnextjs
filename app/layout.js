import { Inter, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartModal from "@/components/CartModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Hader Dhaba | Luxury Dining",
  description: "Experience the finest cuisine at Hader Dhaba.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <CartProvider>
          <Navbar />
          <CartModal />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
