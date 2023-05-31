"use client"
import { motion } from 'framer-motion'
// import { IoIosAlarm } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import Link from 'next/link'
import React from 'react'

export default function Pricing() {
 
  const ecommerce = ["One time Purchased", "Basic Design",
  "3 halaman website", 
  "1x revisi", "Maintenance", "Panel Admin"]
  const landingPage = ["One time Purchased", "Basic Design",
  "3 halaman website", 
  "1x revisi design", "Maintenance", ]
  const premiumLandingPage = ["One time Purchased", "Premium Design", "Full Animasi",
  "5 halaman website", "Translation", "Data Pelanggan",  
  "2x revisi design", "Maintenance", ]
  const undangan = [
    "One time Purchased", "Basic Design",
  "1 halaman website",  
  "1x revisi design", "Maintenance",
  ]
  const custom = [
    "One time Purchased", "Design menyesuaikan",
  "halaman menyesuaikan",  
  "revisi design", "Maintenance",
  ]
    const Card = (src, title, array, price) => {
      
        return (
          <div 
          className="CARD group border-primary border- 
          border-spacing-5 p-4 rounded-lg/ shadow-md 
          hover:shadow-2xl transition-shadow duration-150 
          overflow-hidden flex flex-col gap-5 justify-center items-center 
           min-h-[26rem] w-[19rem] 64 bg-white">
          {/* <div className="img-card rounded-full py-5 flex">
          <Image width={130} height={130} src={src} 
          className="mx-auto p-5 group-hover:animate-pulse
           transition-all hover:animate-pulse duration-300 ease-in delay-100 
          " alt="" />
            </div> */}
          {/* <div className="text-card p-4 flex flex-col  
          justify-center items-center/ bg-slate-200/"> */}
          <div className="flex flex-col items-center mt-4">
            {/* <span className='text-center text-[#545572]'>untuk umkm dan person</span> */}
            <h3 className="text-3xl text-center font-black
            text-primary/ text-[#22293e]
            ">{title}</h3>
            </div>
            <ul className='flex flex-col gap-2'>
            { array.map((list, i)=>{
              return (<li className='text-xl flex gap-3 items-center' key={i}>
               <span><FiCheck className='text-primary text-2xl'/></span> {list}
              </li>)
            })}
            </ul>
            {/* <ul className='text-xl'>
              <li>One time Purchased</li>
              <li>Basic Design</li>
              <li>3 halaman website</li>
              <li>1x revisi design</li>
              <li>Maintenance</li>
            </ul> */}
            {/* <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate saepe quaerat porro nihil corporis reiciendis?</p> */}
            <div className="">
            <h4 className='text-4xl font-black text-primary'>{price}</h4>
            </div>
            <div className="flex flex-col gap-3 items-center">
            <Link href={"/Form"}>
            <button className='button-primary'>Pesan Paket</button>
            </Link>
            <span className='text-sm font-thin 
            text-gray-500'>* Perpanjangan hanya biaya domain</span>
            </div>
          {/* </div> */}
      </div>
        )
      }
    const CardCustom = (src, title, array, price) => {
      
        return (
          <div 
          className="CARD group border-primary bg-dark-blue border- 
          border-spacing-5 p-4  shadow-md 
          hover:shadow-2xl transition-shadow duration-150 
          overflow-hidden flex flex-col gap-5 justify-center items-center 
           min-h-[26rem] w-[21rem] 64 text-gray-200">
          <div className="flex flex-col items-center mt-4">
            {/* <span className='text-center text-[#545572]'>untuk umkm dan person</span> */}
            <h3 className="text-3xl text-center font-black
            text-primary/ text-[#22293e]/ text-white
            ">{title}</h3>
          </div>
            <ul className='flex flex-col gap-3'>
            { array.map((list, i)=>{
              return (<li className='text-xl flex gap-3' key={i}>
               <span><FiCheck className='text-secondary text-2xl'/></span> {list}

              </li>)
            })}
            </ul>
            <div className="">
            <h4 className='text-4xl font-black text-secondary'>{price}</h4>
            </div>
            <div className="flex flex-col gap-3 items-center">
            <Link href={"/Form"}>
            <button className='button-primary'>Pesan Paket</button>
            </Link>
            <span className='text-sm font-thin 
            text-gray-500'>*Domain custom/disesuaikan</span>
            </div>
          {/* </div> */}
      </div>
        )
      }


  return (
    <section className="py-16 bg-gray-200 price-section">
    <div className="flex justify-center py-6">
    <h3 className="sub-title-primary">PRICING</h3>
    </div>
    
    <div className="price-container 
    flex flex-wrap justify-center items-center gap-3 gap-y-5 
    xl:mx-[10rem]">
      <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.1, duration: 0.5}}
      viewport={{ once: true, amount: 0.5}}
      className="">
        {Card("/3dwww.png", "Landing Page", landingPage, "Rp.800K")}
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
        {CardCustom("/3dwww.png", "Premium Landing Page", premiumLandingPage, "Rp.1500K")}
      </motion.div>
        <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.7, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
        {Card("/3dig.png", "Undangan", undangan, "Rp.300K")}
       </motion.div>
      {/* <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
        {Card("/3drocket.png", "E-commerce", ecommerce, "Rp.5000K")}
        </motion.div> */}
    </div>
    <div className="flex justify-center flex-col items-center gap-5 mt-9">
    <div className="text-center">
    <h4 className='text-3xl text-primary font-bold'>atau...</h4>
    <h3 className='text-dark-blue text-lg px-5 md:text-xl md:px-9'>beritahukan kepada kami estimasi budget yang kamu punya dan kami akan membuatkan paket spesial untukmu</h3>
    </div>
    <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.3, duration: 0.5}}
      viewport={{ once: true, amount: 0.4}}
      className="" >
        {CardCustom("/3dig.png", "CUSTOM", custom, "Rp. ?")}
       </motion.div>
    </div>
  </section>
  )
}
