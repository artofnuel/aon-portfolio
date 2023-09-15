import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Inua",
  description: "Frontend Developer and Digital Artist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="relative z-10">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
