import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app + Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
      <div className=" text-stone-900 font-inter">
          <div className="max-w-5xl w-11/12 mx-auto">
      {children}
          </div>
      </div>
      </body>
    </html>
  )
}
