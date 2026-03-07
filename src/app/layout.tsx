import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import DecorativeShapes from './components/DecorativeShapes/DecorativeShapes'
import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Rizki — Portfolio',
  description: 'Portfolio website of Rizki, a Junior Web Developer creating creative and innovative solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${grotesk.variable} font-grotesk`}>
        <DecorativeShapes />
        <Navbar />
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
