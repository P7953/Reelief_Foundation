import type { Metadata } from 'next'
import { Open_Sans, Playfair_Display, Quicksand } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SplashWrapper from '@/components/SplashWrapper'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Reelief Foundation',
  description: 'Transforming Lives Through Care, Empowerment, and Community.',
  keywords: 'Reelief Foundation, community health, healing, advocacy, mental wellness',
  icons: {
    icon: '/images/Logo.PNG',
    apple: '/images/Logo.PNG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${playfair.variable} ${quicksand.variable} font-quicksand`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={quicksand.className}>
        <SplashWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </SplashWrapper>
      </body>
    </html>
  )
}
