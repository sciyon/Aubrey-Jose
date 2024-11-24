import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Pro, Cormorant_SC, Montserrat, Sevillana } from 'next/font/google'

const crimson = Crimson_Pro({ subsets: ['latin'], variable: '--font-crimson' })
const cormorant = Cormorant_SC({  
    preload: false,
    weight: '400',
    style: 'normal',
    variable: '--font-cormorant' 
})
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const sevillana = Sevillana({ 
  weight: '400',
  style: 'normal',
  variable: '--font-sevillana' 
})

export const metadata: Metadata = {
  title: "Aubrey & Jose",
  description: "A website dedicated to the upcoming marriage of Aubrey Antepuesto and Jose Alberto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimson.variable} ${cormorant.variable} ${montserrat.variable} ${sevillana.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
