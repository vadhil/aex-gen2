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
    top-0 text-white w-screen duration-150 transition-all ease-in z-50
    py-8 h-[6rem] lg:h-[7rem]`
    let real = `bg-white shadow fixed duration-150 transition-all ease-in
    py-8 top-0 h-[6rem]  lg:h-[7rem] text-primary w-screen z-50
    ` 


  return (
    // <section className={sofia.className}>
    <header className={color? real : transparent}>
     <div className="grid grid-cols-2 justify-around /justify-stretch z-50 px-  items-center">
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
     text-md font-semibold px-4 duration-300 transition-all text-center items-center gap-4 lg:flex
     ${click ? "hidden " :
    "click"} `}>
     {/* <Link href={'/'}>Tentang kami</Link> */}
     <Link href='#pink' scroll={false} className=''>
        { Button("Konsultasi Gratis")}
     </Link>
     <Link href={'/Eng'}  className='flex gap-3 top-[80%] md:top-[85%]/ -translate-x-7/ 
                translate-y-[-50%]/
                right-12 text-md w-[4.8rem] rounded-full p-2 
                bg-gray-400/ lg:bg-transparent shadow-inner
                border-2 text-primary/ cursor-pointer group duration-300 transition-all ease-in'>
                    <div className="flex gap-5 justify-betwee /text-base relative">
                    <p className='z-20'>En</p>
                    <p className='z-20 '>Id</p>
                    <div className="absolute shadow-inner p-[17px] z-10 
                    top-[-0.3rem] translate-x-[1.8rem]
                     rounded-full bg-secondary 
                     group-hover:-translate-x-[0.4rem] /duration-300 transition-all ease-in"></div>
                </div>
      </Link>
     
    </nav>
    </div>
 </header>
//  </section>
    )

}
