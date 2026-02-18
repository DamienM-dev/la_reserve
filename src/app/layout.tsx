import "./globals.css";
import {Playfair_Display} from 'next/font/google'
import {Allura} from 'next/font/google'

// FONTS

const allura =  Allura({
  subsets:["latin"],
  weight:"400",
  variable:"--font-title"
})

const playfair = Playfair_Display({
  subsets:["latin"],
  weight:"400",
  variable:"--font-general",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={playfair.variable}>
      <body>{children}</body>
    </html>
  )
}