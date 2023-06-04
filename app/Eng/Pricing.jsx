"use client"
import { motion } from 'framer-motion'
import { FiCheck } from "react-icons/fi";
import Link from 'next/link'
import React from 'react'

export default function Pricing() {
 
  const ecommerce = ["One time Purchased", "Basic Design",
  "3-page website", 
  "1x design revision", "Maintenance", "Admin Panel"]
  const landingPage = ["One time Purchased", "Basic Design",
  "3-page website", 
  "1x design revision", "Maintenance", ]
  const premiumLandingPage = ["One time Purchased", "Premium Design", "Full Animation",
  "5-page website", "Translation", "Customer Data",  
  "2x design revision", "Maintenance", ]
  const undangan = [
    "One time Purchased", "Basic Design",
  "1-page website",  
  "1x design revision", "Maintenance",
  ]
  const custom = [
    "One time Purchased", "Custom Design",
  "Custom pages",  
  "Design revision", "Maintenance",
  ]
    const Card = (src, title, array, price) => {
      
        return (
          <div 
          className="CARD group border-primary border- 
          border-spacing-5 p-4 rounded-lg/ shadow-md 
          hover:shadow-2xl transition-shadow duration-150 
          overflow-hidden flex flex-col gap-5 justify-center items-center 
           min-h-[26rem] w-[19rem] 64 bg-white">
  
          <div className="flex flex-col items-center mt-4">
         
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
            <div className="">
            <h4 className='text-4xl font-black text-primary'>{price} 
            <span className='text-base'>/Lifetime</span></h4>
            </div>
            <div className="flex flex-col gap-3 items-center">
            <Link href={"/Form"}>
            <button className='button-primary'>Order Package</button>
            </Link>
            <span className='text-sm font-thin 
            text-gray-500'>* Renewal only includes domain fee</span>
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
            {/* <span className='text-center text-[#545572]'>for micro, small, and medium businesses</span> */}
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
            <h4 className='text-4xl font-black text-secondary'>{price}<span className='text-base'>/Lifetime</span></h4>
            </div>
            <div className="flex flex-col gap-3 items-center">
            <Link href={"/Form"}>
            <button className='button-primary'>Order Package</button>
            </Link>
            <span className='text-sm font-thin 
            text-gray-500'>* Custom/domain-specific</span>
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
        {Card("/3dwww.png", "Landing Page", landingPage,
         "$60")}
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
        {CardCustom("/3dwww.png", "Premium Landing Page",
         premiumLandingPage, "$99")}
      </motion.div>
        <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.7, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
        {Card("/3dig.png", "Invitation", undangan, "$30")}
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
    <h4 className='text-3xl text-primary font-bold'>or...</h4>
    <h3 className='text-dark-blue text-lg px-5 md:text-xl md:px-9'>tell us your budget estimate and we will create a special package for you</h3>
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
