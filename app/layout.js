"use client";

import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="w-full ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
