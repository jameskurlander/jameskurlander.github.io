import '@/styles/globals.css'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex bg-stone-900 font-berkeley-mono-regular text-green-400 text-lg'>{children}</body>
    </html>
  )
}
