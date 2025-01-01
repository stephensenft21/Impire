import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navigation/Navbar.js";
import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";
import Footer from "../components/Navigation/Footer.js";
import { TrainingProvider } from ".././context/TrainingProvider";
import { ProductProvider } from "../context/ProductProvider.js";
import { CartProvider } from "../context/CartContext.js";
import { FeedbackProvider } from "../context/FeedbackProvider.js";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Impire - Fitness Redefined",
  description: "Transform your body and mind with Impire.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased">
        <AppProvider>
          <CartProvider>
            <Navbar />
            <FeedbackProvider>
              <ProductProvider>
                <TrainingProvider>
                  {" "}
                  <main className="pt-16">{children}</main>{" "}
                </TrainingProvider>
              </ProductProvider>
            </FeedbackProvider>
          </CartProvider>
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
