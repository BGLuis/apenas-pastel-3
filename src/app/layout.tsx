import type { Metadata } from "next";
import { Poppins,Passero_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const passerOne = Passero_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Passero_One',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Apenas pastel",
  description: "Uma pastelaria que quase so vende pastel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.variable+" "+passerOne.variable}>
      <body className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex justify-center py-16 px-2">
        <div className="max-screen flex flex-col gap-10">
          {children}
        </div>
      </main>
      <Footer/>
      </body>
    </html>
  );
}
