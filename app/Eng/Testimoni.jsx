"use client"
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Testimoni() {
  const [width, setWidth] = useState(0)
  const carousel = useRef();
    
  const lists = [
    { title: "Increasing Profit",
    content: "After using the website from AEX Digital, I received a flood of orders and my business profit increased significantly. Thank you, AEX Digital.",
    person: "Sarah, Online Store Owner"
    },
    { title: "Awesome Website",
    content: "I'm very satisfied with the landing page I ordered. It looks elegant and makes my business appear more professional.",
    person: "Mr. Bahar, English Course Owner"
    },
    { title: "Attracting New Customers",
    content: "After having a website I ordered here, my customers are not limited to Indonesia only.",
    person: "Linda, Fashion Boutique Owner"
    },
    { title: "Professional",
    content: "With a low investment, my business looks more professional. Great!",
    person: "Fahrizal, Small Business Owner Makassar"
    },
    { title: "Go International",
    content: "My customers and clients are now not only limited to Indonesia.",
    person: "Reza, Graphic Designer"
    },
    { title: "Within Budget",
    content: "I was looking for an affordable website without additional costs. Fortunately, AEX has a custom package at an affordable price.",
    person: "Tasya, Online Business Owner"
    }
  ];
  let gradient = "bg-gradient-to-r from-primary to-blue-400";
  
  return (
    <section id='testimoni' className='py-16'>
        <h2 className='sub-title-primary'>
        WHAT THEY SAY ABOUT AEX DIGITAL</h2>

      <div className="py-5 flex flex-col justify-center items-center mx-auto gap-5 md:gap-10 px-6 md:px-36">
        <div className="px-5 md:px-12 pt-2 order-2">
            <p className='text-xl text-center md:text-center'>
              More than dozens of businesses have successfully grown with us. Don&apos;t hesitate to make your business <span className='font-semibold'>one of them!</span>
            </p>
        </div>
        <div className="carousel-section order-1 mx-auto flex justify-center">
          <motion.div className="w-[21rem] md:w-96 lg:w-[40rem] pb-4/ border-top- px-3 bg-gray-200 overflow-hidden shadow-md hover:shadow-xl rounded-xl/" ref={carousel} whileTap={{ cursor: "grabbing"}}>
            <motion.div className="flex " drag='x' dragConstraints={{right: 0, left: -1200}}>
              {lists.map((list, index) => {
                return (
                  <div className='group bg-white rounded-xl mx-4 p-6 my-5 duration-300 transition-all relative' key={index}>
                    <div className='item w-[12rem] min-h-[12rem] hover:w-[14rem] duration-300 transition-all flex flex-col gap-3'>
                      <h3 className='font-bold text-xl'>{list.title}</h3>
                      <p className='text-sm'>{list.content}</p>
                      <h4 className='text-xs group-hover:font-semibold text-end'>{list.person}</h4>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
        <div className="order-3 flex md:col-span-2">
          <Link className='rounded-xl mx-auto' href={'/Form'}>
            <button className='button-primary'>Create Now</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
