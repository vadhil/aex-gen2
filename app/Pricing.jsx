import Image from 'next/image'
import React from 'react'

export default function Pricing() {

    const Card = (src) => {
        return (
          <div className="CARD group border-primary border- 
          border-spacing-5 p-4/ rounded-lg shadow-md 
          overflow-hidden 
           min-h-[26rem] w-[16rem] 64 bg-white">
          <div className="img-card rounded-full py-5 flex">
          <Image width={130} height={130} src={src} 
          className="mx-auto p-5 group-hover:animate-bounce
           transition-all hover:animate-pulse duration-300 ease-in delay-100 
           
          " alt="" />
            </div>
          <div className="text-card p-4 flex flex-col  
          justify-center items-center/ bg-slate-200/">
            <h4 className="text-xl font-bold">title</h4>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate saepe quaerat porro nihil corporis reiciendis?</p>
          </div>
      </div>
        )
      }


  return (
    <section className="py-16 bg-gray-200 price-section">
    <div className="flex justify-center py-6">
    <h3 className="sub-title-primary">PRICING</h3>
    </div>
    <div className="price-container 
    flex flex-wrap justify-center gap-5">
        {Card("/3dwww.png")}
        {Card("/3drocket.png")}
        {Card("/3dig.png")}
    </div>
  </section>
  )
}
