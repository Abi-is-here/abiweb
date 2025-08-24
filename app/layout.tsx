import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import {DotGothic16} from 'next/font/google'
import localFont from 'next/font/local'
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Abiweb',
    template: '%s | Abiweb',
  },
  description: 'IDK'
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
})

const proto = localFont({
  src: [
    {
      path: '../public/0xProtoNerdFontMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/0xProtoNerdFontMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/0xProtoNerdFontMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
      proto.className 
      )}
    >
    <head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
