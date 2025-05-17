import '@/styles/globals.css'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-beige-600 font-berkeley-mono-regular'>{children}</body>
    </html>
  )
}
