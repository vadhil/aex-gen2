import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section 
    from-blue-700 bg-gradient-to-b to-primary 
    h-screen text-white">
      <div className="container mx-auto flex flex-col gap-4
      items-center pt-48 px-9">
      <h1 className=" text-5xl text-center md:text-8xl font-black
       md:text-center">AEX DIGITAL <br /> WEBSITE</h1>
      <h2 className='sub-title-secondary'> Landing Page | E-Commerce | Blog </h2>
      <p className=" text-center  text-gray-300/ text-secondary 
      md:text-xl font-medium
      ">Jangkau lebih banyak pelanggan 
      dan tingkatkan keuntungan penjualan anda sekarang juga!</p>
      <button className="bg-secondary p-3 px-4 rounded-none shadow-lg md:mt-3/
      hover:rounded-full transition-all duration-900 ease-in
      font-semibold text-primary">Buat Sekarang</button>
      </div>
    </section>
  )
}
