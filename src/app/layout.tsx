import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { MainLayout } from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: {
    default: 'Utkarsh Multimedia | Premium Design, Packaging & Print Agency',
    template: '%s | Utkarsh Multimedia',
  },
  description: 'Premium graphic design, packaging, printing & branding agency. We transform ideas into powerful brand experiences through strategic design and exceptional print craftsmanship.',
  keywords: [
    'graphic design agency',
    'packaging design',
    'commercial printing',
    'branding agency',
    'advertising agency',
    'brochure printing',
    'corporate stationery',
    'brand identity',
  ],
  authors: [{ name: 'Utkarsh Multimedia' }],
  creator: 'Utkarsh Multimedia',
  publisher: 'Utkarsh Multimedia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://utkarshmultimedia.com',
    siteName: 'Utkarsh Multimedia',
    title: 'Utkarsh Multimedia | Premium Design, Packaging & Print Agency',
    description: 'Premium graphic design, packaging, printing & branding agency. We transform ideas into powerful brand experiences.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Utkarsh Multimedia - Premium Design & Print Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsh Multimedia | Premium Design, Packaging & Print Agency',
    description: 'Premium graphic design, packaging, printing & branding agency.',
    images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80'],
    creator: '@utkarshmultimedia',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfcfb' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1614' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen bg-cream-50 text-charcoal-950 dark:bg-charcoal-950 dark:text-cream-50 antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}