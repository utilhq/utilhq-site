import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PostHogProvider from '@/components/PostHogProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'utilhq - Code-First Internal Tools Platform',
  description: 'Build internal tools the way developers prefer - with code, not clicks',
  icons: {
    icon: [
      {
        url: '/favicon.ico/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.ico/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/favicon.ico/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon.ico/site.webmanifest',
  appleWebApp: {
    title: 'utilhq',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider />
        {children}
      </body>
    </html>
  )
}
