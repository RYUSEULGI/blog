import { ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
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
  )
}
