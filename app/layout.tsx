import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack Tech',
  description: 'Full Stack Tech provides cutting-edge AI solutions for rapid business growth.',
  keywords: 'AI, Business Solutions, AI Implementation, Business Growth, Full Stack Tech'
}


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`flex flex-col min-h-screen ${inter.className}`}>
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

