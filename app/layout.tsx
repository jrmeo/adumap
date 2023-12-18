import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adu Organization Hub',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>


    <html lang="en">
      <head>
        <meta name="viewport" content="height=device-height, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
