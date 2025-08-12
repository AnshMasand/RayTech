import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RayTech LED - Premium Lighting Solutions for Industry Leaders',
  description: 'State-of-the-art LED lighting solutions with advanced technology, strong financial operations, and strategic partnership with Syska. Trusted by India\'s leading enterprises.',
  keywords: 'LED, lighting, Raytech, Syska, industrial lighting, commercial lighting, India, enterprise lighting, premium LED solutions',
  openGraph: {
    title: 'RayTech LED - Premium Lighting Solutions',
    description: 'State-of-the-art LED lighting solutions trusted by industry leaders',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RayTech LED - Premium Lighting Solutions',
    description: 'State-of-the-art LED lighting solutions trusted by industry leaders',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-theme-background text-theme-text-primary selection:bg-theme-accent/20 selection:text-theme-text-primary`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
} 