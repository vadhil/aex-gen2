"use client"
import { motion } from "framer-motion";


export default function Pertanyaan() {
  const CardVariantsLeft = {
    offscreen: {
        x: -300,
        rotate: 0
    },
    onscreen: {
        x: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
}
  return (
    <section className=" py-9">
      <motion.div className="container  mx-auto bg-warnin"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8}}
        >

    {/* <div className="flex justify-center">
    <motion.h3 variants={CardVariantsLeft} className=" 
    sub-title-primary 
    ">
      QNA WEBSITE</motion.h3>
    </div> */}
    <div className="flex justify-center">
    <motion.h3
     initial={{ opacity: 0, y: 15}}
     whileInView={{ opacity: 1, y: 0}}
    transition={{delay: 0.2, duration: 0.5}}
    viewport={{ once: true, amount: 0.5}}
    className="sub-title-primary" >
      PERTANYAAN TENTANG PEMBUATAN WEBSITE</motion.h3>
    </div>
    <div class="max-w-4xl mx-auto p-8 flex flex-col gap-3">
        <motion.details 
             initial={{ opacity: 0, y: 15}}
             whileInView={{ opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5}}
            viewport={{ once: true, amount: 0.5}}
        class="open:bg-white border p-4
         open:ring-1 open:ring-black/5 
         open:shadow-lg rounded-lg" open>
          <summary class="md:text-lg text-md /
           text-slate-700 font-semibold 
           select-none">
            Mengapa Saya butuh Website ?
          </summary>
          <div class="mt-3 text-sm  md:text-md  text-slate-600">
            <p>Memiliki website memiliki banyak keuntungan, bukan hanya memperluas jangkaun bisnis anda, tapi juga 
             membuat bisnis anda terlihat lebih profesional.</p>
          </div>
        </motion.details>
        <motion.details 
             initial={{ opacity: 0, y: 15}}
             whileInView={{ opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5}}
            viewport={{ once: true, amount: 0.5}} class="open:bg-white border p-4
         open:ring-1 open:ring-black/5 
         open:shadow-lg rounded-lg" close>
          <summary class="md:text-lg text-md  
           text-slate-700 font-semibold 
           select-none">
          Apa yang perlu dipersiapkan?
          </summary>
          <div class="mt-3 text-sm  md:text-md  text-slate-600 ">
          <p>yang perlu anda persiapkan hanya ide dan kami akan mewujudkan ide tersebut.</p>
          </div>
        </motion.details>
        <motion.details 
             initial={{ opacity: 0, y: 15}}
             whileInView={{ opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.5}}
            viewport={{ once: true, amount: 0.5}} class="open:bg-white border p-4 open:ring-1 open:ring-black/5
         open:shadow-lg rounded-lg" close>
          <summary class="md:text-lg text-md text-slate-600 font-semibold select-none">
          Apa yang akan saya dapatkan?
          </summary>
          <div class="mt-3 text-sm  text-slate-600 ">
            <p>Website yang telah terpublish dan semua fitur dari paket yang kamu pilih.</p>
          </div>
        </motion.details>
        <motion.details 
             initial={{ opacity: 0, y: 15}}
             whileInView={{ opacity: 1, y: 0}}
            transition={{delay: 0.8, duration: 0.5}}
            viewport={{ once: true, amount: 0.5}} class="open:bg-white border p-4 open:ring-1 open:ring-black/5
         open:shadow-lg rounded-lg" close>
          <summary class="md:text-lg text-md text-slate-600 font-semibold select-none">
          Apakah terdapat biaya tambahan?
          </summary>
          <div class="mt-3 text-sm  text-slate-600 ">
            <p>Tidak. Tidak ada biaya tambahan dalam pembuatan website. Biaya yang mungkin anda keluarkan hanya <span className="text-black font-semibold"> untuk perpanjangan domain  </span>anda
            pada tahun berikutnya sebesar +-Rp.150k (domain .com).  
            </p>
          </div>
        </motion.details>
    </div> 
           </motion.div>
    </section>
  )
}
