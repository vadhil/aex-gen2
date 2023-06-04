"use client"
import { motion } from "framer-motion"
import Image from "next/image"


export default function Kelebihan() {
    const Card = (animate, src, title, content) => {
        return (
          <div className="CARD group border-primary border- 
          border-spacing-5 p-4/ rounded-lg shadow-md hover:shadow-xl z-10
          relative duration-150 transition-shadow ease-in
          overflow-hidden 
           h-[18rem] w-[18rem] 64 bg-white">
          <div className={`img-card rounded-full py-5 flex /group-hover:animate-${animate}`}>
          <Image width={130} height={130} src={src} 
          className={`mx-auto p-5 group-hover:animate-bounce
           transition-all  duration-300 animate-bounce/
            ease-in delay-100`} alt="" />
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
        <div
        
        className="container-kelebihan-AEX 
        py-16 flex flex-col justify-center items-center gap-9">
           <div 
           
           className="title-box flex flex-col text-center gap-3">
            <motion.h2
              initial={{ opacity: 0, y: 15}}
              whileInView={{ opacity: 1, y: 0}}
             transition={{delay: 0.1, duration: 0.5}}
             viewport={{ once: true, amount: 0.6}}
            className="sub-title-primary px-[3rem]">
                MENGAPA PILIH JASA PEMBUATAN WEBSITE AEX DIGITAL</motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 15}}
              whileInView={{ opacity: 1, y: 0}}
             transition={{delay: 0.2, duration: 0.5}}
             viewport={{ once: true, amount: 0.6}}
            className="lead text-lg lg:text-xl text-center px-[3rem] lg:px-[12rem] text-gray-700">
                Kami tidak hanya fokus pada <span className="text-primary">jasa pembuatan website</span>, tetapi juga memberikan layanan modifikasi desain website yang dapat meningkatkan kinerja bisnis Anda.</motion.h3>
        </div>
            <div className="card-box flex flex-wrap justify-center lg:mx-[10rem]  gap-3">
               
            <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.1, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
                {Card("bounce","/ecommerce.png", "One Time Purchased", "Anda hanya perlu membeli website sekali seumur hidup tanpa ada biaya tambahan di tahun-tahun berikutnya. ")}
      </motion.div>
            <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.2, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
                {Card("pulse","/3dwww.png", "SEO Friendly", "Team kami mengoptimalkan fitur SEO, membuat website anda terlihat di google dan membantu anda mendapatkan lebih banyak pelanggan.")}
      </motion.div>
            <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.3, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
                {Card("bounce","/responsive.png", "Responsive", "Tampil sempurna di setiap perangkat, kami mendesain website yang responsive di setiap perangkat calon pelanggan anda .")}
      </motion.div>
            <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
                {Card("pulse","/unique-design.png", "Design Premium ", "Kami mendesain website yang beranimasi, unik dan berbeda untuk tiap pelanggan, No more template desain!.")}
      </motion.div>
            <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.5, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
                {Card("spin","/maintenance.png", "Gratis Maintenance", "Lebih dari sekadar pembuatan, kami juga menyediakan layanan perawatan website yang dapat diandalkan sehingga anda tak perlu khawatir.")}
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: 15}}
       whileInView={{ opacity: 1, y: 0}}
      transition={{delay: 0.7, duration: 0.5}}
      viewport={{ once: true, amount: 0.6}}
      className="">
                {Card("bounce","/3drocket.png", "Anti Lemot", "Bebas dari keterlambatan, jasa pembuatan website kami menawarkan kecepatan tanpa hambatan.")}
      </motion.div>
      
            </div>
    </div> 
    </section>
  )
}
