import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import { Noto_Sans_Javanese } from 'next/font/google'

const javanese = Noto_Sans_Javanese({
  weight: '400',
  subsets: ['javanese'],
  display: 'swap',
  variable: '--font-javanese',
})

export const metadata: Metadata = {
  title: 'website',
  description: 'sebuah website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`bg-white text-black antialiased ${javanese.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
