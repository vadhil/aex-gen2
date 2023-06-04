// import { Analytics } from '@vercel/analytics/react';
// import Footer from './Footer'
import Nav from './Nav'
import { Albert_Sans} from 'next/font/google'
const albert = Albert_Sans({ subsets: ['latin'] })


export const metadata = {
  title: 'AEX Digital - Jasa Pembuatan Website Terpercaya',
  description: 'Jasa pembuatan website Premium, Bayar sekali seumur hidup. AEX Digital solusi kebutuhan website anda. Menyediakan website landing Page, Blog dan Marketplace',
  name: "google-site-verification",
  content: "Y_v751NWo8VPjVfiV9Y7l3W8KmfBB3K7Qw2lWVjekBM"
}
export default function Layout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={albert.className}>
        <main className='relative'>
        <Nav />
        {children}
        {/* <Footer/> */}
        {/* <Analytics /> */}
        </main>
        </body>
    </html>
  )
}
