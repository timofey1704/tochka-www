import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

const geistPalanquin = localFont({
  src: '../public/fonts/palanquin/Palanquin-Regular.ttf',
  variable: '--font-geist-palanquin',
  weight: '100 900',
})
const geistPostNoBillsJaffna = localFont({
  src: '../public/fonts/post-no-bills-jaffna/PostNoBillsJaffna-Regular.ttf',
  variable: '--font-geist-',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Tochka Records',
  description: 'Лучшая студия звукозаписи в Калининграде',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${geistPalanquin.variable} ${geistPostNoBillsJaffna.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
