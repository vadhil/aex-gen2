"use client"
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Testimoni() {
  const [width, setWidth] = useState(0)
  const carousel = useRef();
    
  const lists = [
    { title: "Meningkatkan Keuntungan",
    content: "Setelah menggunakan Website dari AEX Digital, saya kebanjiran orderan dan keuntungan bisnis saya meningkat drastis, terima kasih AEX Digital",
    person: "Sarah, Owner Toko Online"
    },
    { title: "Websitenya Keren",
    content: "Saya sangat puas dengan landing page yang saya saya pesan, sangat elegan dan bisnis saya terlihat lebih profesional ",
    person: "Pak Bahar, Owner Kursus Bahasa Inggris"
    },
    { title: "Menggaet Pelanggan Baru",
    content: "Setelah Punya Website yang saya pesan disini, pelanggan saya tidak terbatas dari Indonesia saja",
    person: "Linda, Owner Butik Fashion"
    },
    { title: "Profesional",
    content: "Dengan modal yang murah bisa buat bisnis saya terlihat lebih Profesional, mantap",
    person: "Fahrizal Owner Umkm Makassar"
    },
    { title: "Go International",
    content: "Pelanggan dan client saya sekarang tidak terbatas hanya di Indonesia",
    person: "Reza, Graphic Designer"
    },
    { title: "Sesuai Dengan Budget",
    content: "sebelumnya udah nyari website yang lumayan murah dan ga ada biaya tambahan, untungnya AEX punya paket custom yang murce",
    person: "Tasya, Owner Bisnis Online"
    }
    ];
let gradient = "bg-gradient-to-r from-primary to-blue-400"
  return (
    <section id='testimoni ' className='py-16 '>
        <h2 className='sub-title-primary'>
        APA YANG MEREKA KATAKAN TENTANG <br /> AEX DIGITAL</h2>

      <div className="py-5 flex flex-col 
      justify-center items-center mx-auto
      gap-5 md:gap-10 px-6 md:px-36
        ">  <div className="px-5 md:px-12 pt-2 order-2 ">
            <p className='text-xl text-center md:text-center '>
            More than 1300 people have experienced growth and benefited from Smart English Training. Don't hesitate to join us and <span className='font-semibold'> Become One Of Them!</span>
            </p>

        </div>
        <div className=" carousel-section order-1 mx-auto flex justify-center">
        <motion.div className="w-[21rem] md:w-96 lg:w-[40rem] 
        pb-4/ border-top- px-3 bg-gray-200 overflow-hidden shadow-md hover:shadow-xl rounded-xl/"
         useRef={carousel} whileTap={{ cursor: "grabbing"}}>
            <motion.div className="flex "
            drag='x' dragConstraints={{right: 0, left: -1200}}
            >      {lists.map((list)=>{
                return <div className='group bg-white rounded-xl
                  mx-4 p-6 my-5 duration-300 transition-all relative' key={list.id}>
                <div className=' item w-[12rem] min-h-[12rem] 
                 hover:w-[14rem] duration-300  transition-all 
                 flex  flex-col gap-3'>
                  <h3 className='font-bold text-xl'>{list.title}</h3>
                  <p className='text-sm'>{list.content}</p>
                  <h4 className='text-xs group-hover:font-semibold   text-end'>{list.person}</h4>
                </div>
                  {/* <Image  className='absolute shadow-lg p-1  rounded-full -bottom-4 right-[6.5rem]
                  border-spacing-2 border-prime '
                  src={'/img/logo-facebook.svg'} width={45} height={45} alt='foto customer'/> */}
                </div>
            })}


            </motion.div>
        </motion.div>
        </div>
        <div className=" order-3 flex md:col-span-2">

        <Link className=' rounded-xl mx-auto' href={'/Form'} >
            <button className='button-primary'>Buat sekarang</button>
          </Link>
      </div>
    </div>
    </section>
  )
}


  {/* <div className="wrapper w=[450px]">
                <div className="carouse w-64 flex-nowrap overflow-hidden bg-white flex">
                <Image src={'/img/fast.svg'} width={150} height={150} alt='img'/>
                  <Image src={'/img/money.svg'} width={150} height={150} alt='img'/>
                  <Image src={'/img/fast.svg'} width={150} height={150} alt='img'/>
                  <Image src={'/img/konsultasi.svg'} width={150} height={150} alt='img'/>
                  <Image src={'/img/modern.svg'} width={150} height={150} alt='img'/>
                </div>
            </div> */}