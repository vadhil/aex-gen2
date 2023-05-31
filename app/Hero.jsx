"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    
    <section className="hero-section 
    from-blue-700 bg-gradient-to-b to-primary 
    h-screen text-white">
      <div className="container mx-auto flex flex-col gap-4
      items-center pt-48 px-9">
        <motion.h1 
         initial={{ opacity: 0, y: 15}}
         whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 0.3}}
        viewport={{ once: true, amount: 0}}
      className=" text-5xl text-center md:text-8xl font-black
       md:text-center">AEX DIGITAL <br /> WEBSITE</motion.h1>
      <motion.h2 
         initial={{ opacity: 0, x: 150}}
         whileInView={{ opacity: 1, x: 0}}
        transition={{delay: 0.3, duration: 0.5}}
        viewport={{ once: true, amount: 0}}
      className='sub-title-secondary'> Landing Page | E-Commerce | Blog </motion.h2>
      <motion.p 
         initial={{ opacity: 0, x: -150}}
         whileInView={{ opacity: 1, x: 0}}
        transition={{delay: 0.5, duration: 0.5}}
        viewport={{ once: true, amount: 0.6}}
      className=" text-center  text-gray-300/ text-secondary 
      md:text-xl font-medium
      ">Jangkau lebih banyak pelanggan 
      dan tingkatkan keuntungan penjualan anda sekarang juga!</motion.p>
      <motion.button 
      initial={{ opacity: 0, y: 15}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.8, duration: 0.5}}
      viewport={{ once: true, amount: 0}}
      className="bg-secondary p-3 px-4 rounded-none shadow-lg md:mt-3/
      hover:rounded-full 
      font-semibold text-primary">
        <Link href='https://wa.me/0895307455556' passHref>Chat Sekarang</Link></motion.button>
      </div>
    </section>
  )
}
