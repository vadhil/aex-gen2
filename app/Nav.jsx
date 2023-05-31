"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './components/Button'
import styles from './Navbar.module.css';

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
    py-8 h-[6rem] lg:h-[7rem]`
    let real = `bg-white shadow fixed duration-150 transition-all ease-in
    py-8 top-0 h-[6rem]  lg:h-[7rem] text-primary w-screen
    ` 


  return (
    // <section className={sofia.className}>
    <header className={color? real : transparent}>
     <div className="grid grid-cols-2 justify-around /justify-stretch px-  items-center">
    <div className={`logo title ${color? 'text-primary': 'text-secondary'} 
     font-black px-4 lg:px-9 text-2xl lg:text-3xl  `}>
      <Link className='z-100' href={'/'}><h2>AEX</h2></Link>
    </div>


    <div className={`px-9 flex ms-auto lg:hidden ${!click && 'text-primary'}`}>
    <input onClick={()=> setClick(!click)} type="checkbox"
     className={`${styles.navigation__checkbox}`} 
    id="navi-toggle"/>
     {/* <button type='checkbox' className={` ${styles.navigation__checkbox}`} 
     id="navi-toggler"
     onClick={()=> setClick(!click)}/> */}
     {/* </button> */}
    <label for="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
      {/* menu */}
    </label>
    </div>
    <nav className={`mt-2 md:mt-0 col-span-2 lg:px-9 md:col-span-1 md:ms-auto
     text-md font-normal px-4 group-checked:bg-red-500 duration-500 transition-all text-center items-center gap-4 lg:flex
     ${click ? "hidden " :
    "click"} `}>
     <Link className='' href={'/'}>Translate</Link>
     <Link href={'/'}>Tentang kami</Link>
     <Link href='#pink' scroll={false} className=''>
        { Button("Konsultasi Gratis")}
     </Link>
     
    </nav>
    </div>
 </header>
//  </section>
    )

}
