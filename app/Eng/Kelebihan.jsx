"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Kelebihan() {
  const Card = (alt, animate, src, title, content) => {
    return (
      <div className="CARD group border-primary border- 
          border-spacing-5 p-4/ rounded-lg shadow-md hover:shadow-xl z-10
          relative duration-150 transition-shadow ease-in
          overflow-hidden 
          h-[18rem] w-[18rem] 64 bg-white">
        <div className={`img-card rounded-full py-5 flex /group-hover:animate-${animate}`}>
          <Image width={130} height={130} src={src} className={`mx-auto p-5 group-hover:animate-bounce
          transition-all  duration-300 animate-bounce/
          ease-in delay-100`} alt={alt} />
        </div>
        <div className="text-card p-4 flex flex-col absolute 
          justify-center items-center/ top-[7rem] text-center  ">
          <h4 className="text-xl font-black text-[#545572] /text-[#22293e] ">{title}</h4>
          <p className="group-hover:animate-pulse text-[#22293e]/
          text-[#545572]">{content}</p>
        </div>
      </div>
    )
  }

  return (
    <section>
      <div className="container-kelebihan-AEX py-16 flex flex-col justify-center items-center gap-9">
        <div className="title-box flex flex-col text-center gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="sub-title-primary px-[3rem]"
          >
            WHY CHOOSE AEX DIGITAL WEBSITE CREATION SERVICE
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="lead text-lg lg:text-xl text-center px-[3rem] lg:px-[12rem] text-gray-700"
          >
            We not only focus on <span className="text-primary">website creation services</span>,
            but also provide website design modification services that can enhance your business performance.
          </motion.h3>
        </div>
        <div className="card-box flex flex-wrap justify-center lg:mx-[10rem]  gap-3">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="">
            {Card("one time purchased for a lifetime","bounce", "/ecommerce.png", "One Time Purchased", "You only need to buy the website once for a lifetime without any additional costs in the following years.")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="">
            {Card("seo friendly","pulse", "/3dwww.png", "SEO Friendly", "Our team optimizes SEO features, making your website visible on Google and helping you get more customers.")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="">
            {Card("responsive in every screen","bounce", "/responsive.png", "Responsive", "Look perfect on every device, we design websites that are responsive on every device for your potential customers.")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="">
            {Card("premium and elegant design","pulse", "/unique-design.png", "Premium Design", "We design animated, unique, and different websites for each customer, no more design templates!")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="">
            {Card("maintenance feature","spin", "/maintenance.png", "Free Maintenance", "More than just creation, we also provide reliable website maintenance services so you don't have to worry.")}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true, amount: 0.6 }}
            className="">
            {Card("fast and lag free","bounce", "/3drocket.png", "Lag-Free", "A lightweight and fast website, optimal web performance for user comfort.")}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
