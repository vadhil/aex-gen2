"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './components/Button'
// import { Sofia_Sans} from 'next/font/google'
// const sofia = Sofia_Sans({ subsets: ['latin'] })




export default function Nav() {
  const [color, setColor] = useState(false)
  const [click, setClick] = useState(true)
    const changeColor = () => {
        // 680
        if (window.scrollY >= 580 ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
          window.removeEventListener('scroll', changeColor);
        };
      }, []);
    // useEffect(()=>{
    //   }, [click])
    let transparent = ` ${click ? "bg-transparent" : "bg-white delay-0 duration-0"} fixed
    top-0 text-white w-screen duration-150 transition-all ease-in
    p-8 h-[7rem]`
    let real = `bg-white shadow fixed duration-150 transition-all ease-in
    top-0 h-[6rem] lg:h-[7rem] text-primary w-screen
    p-8` 


  return (
    // <section className={sofia.className}>
    <header className={color? real : transparent}>
     <div className="grid grid-cols-2 justify-between  items-center">
    <div className={`logo title ${color? 'text-primary': 'text-secondary'} 
     font-black text-3xl  `}>
      <h2>AEX</h2>
    </div>
    <div className={`px-4 flex ms-auto md:hidden ${!click && 'text-primary'}`}>
     <button type="checkbox" onClick={()=> setClick(!click)}>menu</button>
    </div>
    <nav className={`mt-2 md:mt-0 col-span-2 md:col-span-1 md:ms-auto
     text-md font-normal px-4 duration-500 transition-all items-center gap-4 md:flex
     ${click ? "hidden" :
    "flex flex-col justify-end text-end/ md:hidden bg-white items-center py-5 rounded-lg text-primary"} `}>
     <Link className='' href={'/'}>Translate</Link>
     <Link href={'/'}>Tentang kami</Link>
     {/* <Link href={'/'}>Free Resources</Link> */}
     <Link href={'/Form'} className=''>
        { Button("Konsultasi Gratis")}
     </Link>
     
    </nav>
    </div>
 </header>
//  </section>
    )

}
