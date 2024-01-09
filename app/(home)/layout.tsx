import { Footer } from '@/components/layouts/footer'
import { Navbar } from '@/components/layouts/navbar'

import { ReactNode } from 'react'
import Providers from '../providers'

import { baseUrl } from '@/libs/utils'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'skeyyy 개발 블로그',
  description: 'skeyyy 개발 블로그 입니다.',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="h-full mx-auto max-w-2xl px-6 lg:max-w-4xl lg:px-8">
            <div className="min-h-screen flex flex-col justify-between gap-10">
              <main className="relative mt-20">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
