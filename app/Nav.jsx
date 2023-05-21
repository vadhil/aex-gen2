"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 670 ) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    let transparent = `bg-tranparent  fixed
    top-0 text-white w-screen
    p-11`
    let real = `bg-white   fixed
    top-0 text-primary w-screen
    p-11` 


  return (
    <header className={color? real : transparent}>
     <div className="flex justify-between ">

    <div className="logo text-">Logo</div>
    <nav className="ms-aut  hidden gap-4 md:flex">
     <Link href={'/'}>translate</Link>
     <Link href={'/'}>pesan website</Link>
     <Link href={'/'}>tentang kami</Link>
    </nav>
    <div className="px-4">
     <button type="checkbox ">Menu</button>
    </div>
     </div>
 </header>
    )
}
