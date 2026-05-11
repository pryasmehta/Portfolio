import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ing Pryas Mehta - QA Leader & IT Consultant',
  description: 'Professional portfolio showcasing QA leadership, enterprise testing, and IT consulting expertise',
  keywords: 'QA, Testing, Leadership, IT Consultant, Prague, CEMEX, DHL',
  openGraph: {
    title: 'Ing Pryas Mehta - QA Leader & IT Consultant',
    description: 'Digital quality and innovation expert',
    url: 'https://your-domain.com',
    siteName: 'Ing Pryas Mehta Portfolio',
    images: [
      {
        url: 'https://your-domain.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}