import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar/Navbar'

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
      <body className="bg-white text-black antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
