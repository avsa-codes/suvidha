import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SUVIDHA - स्वयं की खोज',
  description: 'अपने उपकरण के लिए सही पार्ट खोजें। व्हाट्सएप पर संपर्क करें।',
  generator: 'v0.app',

  manifest: '/manifest.json',   // ✅ ADD THIS
  themeColor: '#facc15',        // ✅ ADD THIS

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html lang="hi" className="bg-gray-900">
      <body className="font-sans antialiased bg-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
      </body>
    </html>
  )
}
