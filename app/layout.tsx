import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simran Gautam',
  description: 'Profolio of Simran',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
