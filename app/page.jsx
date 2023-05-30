import Link from "next/link";
import Hero from "./Hero";
import Card, { CtaCard } from "./components/Card";
import { motion } from "framer-motion";
import Pertanyaan from "./pertanyaan";
import Pink from "./Pink";
import Pricing from "./Pricing";
import Choose from "./Choose";

export default function Home() {
 

  
  return (
      <>
        <Hero />
       <CtaCard/>
       <Choose />
       <Pricing />
       <Pink />
       <Pertanyaan/>
      </>
  )
}





      {/* <section className="py-9 mx-auto  testimoni-section">
            <h3 className="text-2xl text-primary
            text-center p-5 font-bold">TESTIMONI</h3>
          <div className=" h-screen w-screen flex justify-center
           bg-green-100 items-center 
           hover:bg-green-500 duration-300 transition-colors ease-in">
              <div className="text ">
                Client dari berbagai macam background dan bisnis telah 
                merasakan manfaatnya
              </div>
              
              <div className="w-2/3 md:w-1/3 p-16 rounded-2xl mx-auto bg-secondary">
              
              </div> 
          </div>
        </section> */}