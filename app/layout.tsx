import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Camp Travel',
  description: 'Travel App UI/UX for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
