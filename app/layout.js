import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mitroplus Labs",
  description: "Blockchain, Metaverse & Artificial Intelligence for Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar></Navbar>
        <div>
          {children}
          </div>
          <Footer></Footer>
      </body>
    </html>
  );
}
