import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section 
    from-blue-700 bg-gradient-to-b to-primary 
    h-screen text-white">
      <div className="container mx-auto flex flex-col gap- items-center pt-48 px-9">
      <h1 className=" text-5xl text-center md:text-8xl font-black md:text-center">AEX DIGITAL <br /> WEBSITE</h1>
      <p className=" text-center p-4 text-gray-300 
      md:text-xl
      ">buat website untuk menjangkau lebih banyak pelanggan 
      dan tingkatkan keuntungan  <br /> penjualan anda sekarang juga!</p>
      <button className="bg-secondary p-3 px-4 shadow-lg md:mt-3
      hover:rounded-full transition-all duration-300 ease-in-out 
      font-semibold text-primary">Buat Sekarang</button>
      </div>
    </section>
  )
}
