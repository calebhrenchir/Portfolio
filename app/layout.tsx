import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Hrenchir',
  description: 'Software designer, photographer, and amateur comedian.',
  keywords: [
    "Next.js",
    "React",
    "TailwindCss",
    "Photography",
    "Software"
  ],
  creator: "Caleb Hrenchir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caleb.vercel.app",
    description: "Software designer, photographer, and amateur comedian.",
    siteName: "Caleb Hrenchir"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">{children}</body>
    </html>
  )
}
