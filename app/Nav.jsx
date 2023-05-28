"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [color, setColor] = useState(false)
  const [click, setClick] = useState(false)
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
    let transparent = `bg-transparent fixed
    top-0 text-white w-screen duration-300 transition-all
    p-11`
    let real = `bg-white fixed duration-300 transition-all
    top-0 text-primary w-screen
    p-11` 


  return (
    <header className={color? real : transparent}>
     <div className="flex justify-between  ">

    <div className="logo text-">Logo</div>
    <nav className={`ms-aut  ${click && "hidden"} gap-4 md:flex`}>
     <Link href={'/'}>translate</Link>
     <Link href={'/'}>pesan website</Link>
     <Link href={'/'}>tentang kami</Link>
    </nav>
    <div className="px-4">
     <button type="checkbox" onClick={()=> setClick(!click)}>Menu</button>
    </div>
     </div>
 </header>
    )
}
