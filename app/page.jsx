import Link from "next/link";
import Pertanyann from "./pertanyaan";
import Hero from "./Hero";
import Card from "./components/Card";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <>
        <Hero />
        <section className="py-9 mx-auto  testimoni-section">
            <h3 className="text-2xl text-primary
            text-center p-5 font-bold">TESTIMONI</h3>
          <div className=" h-screen w-screen flex justify-center
           bg-green-100 items-center">
              <div className="text">
                Client dari berbagai macam background dan bisnis telah 
                merasakan manfaatnya
              </div>
              
              <div className="w-2/3 md:w-1/3 p-16 rounded-2xl mx-auto bg-secondary">
              
              </div> 
          </div>
        </section>
       {/* <Pertanyann/> */}
       {/* <Card /> */}
      </>
  )
}
