import { Footer } from '@/components/layouts/footer'
import { Navbar } from '@/components/layouts/navbar'

import { Metadata } from 'next'
import { ReactNode } from 'react'
import Providers from '../providers'

import '../globals.css'

export const metadata: Metadata = {
  title: 'skeyyy 개발 블로그',
  description: 'skeyyy 개발 블로그 입니다.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            <Navbar />
            <div className="h-full mx-auto max-w-2xl px-6 lg:max-w-4xl lg:px-8">
              <div className="min-h-screen flex flex-col justify-between gap-10">
                <main className="relative">
                  <div className="mt-20">{children}</div>
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
