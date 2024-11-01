import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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
      <body
        className={`${geistPalanquin.variable} ${geistPostNoBillsJaffna.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
