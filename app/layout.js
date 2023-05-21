import Header from './Header'
import Nav from './Nav'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <Header /> */}
        <main className='relative'>
        <Nav />
        {children}
        </main>
        </body>
    </html>
  )
}
