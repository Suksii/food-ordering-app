import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Sofadi_One, Inria_Sans } from '@next/font/google'

// const inter = Inter({ subsets: ["latin"] });
const sofadi = Sofadi_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sofadi'
})
const inria = Inria_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inria'
})

export const metadata: Metadata = {
  title: "Food ordering",
  description: "Best food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${sofadi.variable} ${inria.variable}`}>
        <AuthProvider>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer position="top-center" theme="dark" />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
