"use client"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "./config/firebase-config"
import { redirect } from "next/navigation"

export default function Pink() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [hp, setHp] = useState('')


   const CreateHandler = async() => {
      await addDoc(collection(db, "consult"), {
        time: serverTimestamp(),
        name,
        email,
        hp
      })
      redirect("/")
   }


return (
<section className="bg-secondary py-16 " id="pink">
  <div className="bg-secondary shadow-sm/">

    <h2 className="sub-title-primary">KONSULTASI GRATIS UNTUK MENCIPTAKAN <br /> 
    WEB IMPIANMU</h2>
    <p className=" text-center text-gray-500 py-5">Beritahukan kepada kami 
    goals dan website impian anda</p>
    <div className="pink-container flex flex-col  gap-9 justify-center items-center">
        <form onSubmit={CreateHandler} className="flex flex-col gap-3 py-">
            <label className="block" >
                <input required onChange={(e)=> setName(e.target.value)} value={name}
                  className=" input-primary"
                  placeholder="Nama lengkap" type="text"
                />
              </label>
            <label className="block w-96">
                <input required onChange={(e)=> setEmail(e.target.value)} value={email}
                  type="email"
                  className="input-primary
                  "
                  placeholder="Alamat Email"
                />
              </label>
            <label className="block w-96">
                <input required onChange={(e)=> setHp(e.target.value)} value={hp}
                  type="text"
                  className="input-primary
                  "
                  placeholder="Nomor Handphone (optional)"
                />
              </label>
              <div className="flex justify-center">
                <button type="submit" className="button-primary mt-5">Kirim</button>
              </div>
        </form>
    </div>
    </div>


</section>
    )
}
