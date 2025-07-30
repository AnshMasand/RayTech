import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeContext'
import ThemeWrapper from '@/components/ThemeWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raytech LED - Innovative Lighting Solutions',
  description: 'State-of-the-art LED lighting solutions with advanced technology, debt-free operations, and strategic partnership with Syska.',
  keywords: 'LED, lighting, Raytech, Syska, industrial lighting, commercial lighting, India',
  openGraph: {
    title: 'Raytech LED - Innovative Lighting Solutions',
    description: 'State-of-the-art LED lighting solutions with advanced technology',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
} 