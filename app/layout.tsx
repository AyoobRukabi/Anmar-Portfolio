import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/language'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anmar - Photographer & Videographer | Tampere, Finland',
  description: 'Visual storytelling through photography and videography. Based in Tampere, Finland. Specializing in portraits, events, and cinematic content.',
  keywords: ['photographer Tampere', 'videographer Finland', 'portrait photography', 'event coverage', 'cinematic videography'],
  authors: [{ name: 'Anmar' }],
  openGraph: {
    title: 'Anmar - Visual Storyteller',
    description: 'Photography & Videography Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
