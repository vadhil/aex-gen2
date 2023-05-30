import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer'
// import Header from './Header'
import Nav from './Nav'
import './globals.css'
import { Albert_Sans} from 'next/font/google'
// import { Sofia_Sans, Montserrat} from 'next/font/google'

const albert = Albert_Sans({ subsets: ['latin'] })
// const sofia = Sofia_Sans({ subsets: ['latin'] })
// const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'AEX Digital - Jasa Pembuatan Website Terpercaya',
  description: 'Jasa pembuatan website terbaik, unik dan premium. AEX Digital solusi kebutuhan website anda. Menyediakan website landing page, blog dan marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={albert.className}>
        {/* <Header /> */}
        <main className='relative'>
        <Nav />
        {children}
        <Footer/>
        <Analytics />
        </main>
        </body>
    </html>
  )
}
