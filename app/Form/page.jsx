'use client'
import {  addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config"; //export const db = getFirestore(app)
import {  useState } from "react";
// import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from "next/navigation";


export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [getInfo, setGetInfo] = useState('');
  const ref = collection(db, "newClients");
  const router = useRouter();

  const handleCreate = (e) =>{
    e.preventDefault();
       addDoc(ref, {
          createdAt: serverTimestamp(),
          name,
          email,
          number,
          getInfo
      })   
    setName('')
    setEmail('')
    setNumber('')
    setGetInfo('')
    router.push('/')
  }
  return (
    <section className='flex justify-center pt-20
    text-primary bg-primary '>
        <div className='card gri shadow-2xl px-8 py-10 bg-white mt-4 mb-4 rounded-2xl border'>
            <h1 className='text-4xl mb-7 font-black text-primary text-center'>
            Form Pendaftaran</h1>
            <form className='flex flex-col gap-3' action="" onSubmit={handleCreate}>
            
            <label class="block">
                <span class="text-gray-700">Nama Lengkap</span>
                <input required onChange={(e)=> setName(e.target.value)} value={name}
                  type="text"
                  class="
                    mt-1
                    block
                    w-full
                    p-2
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-red-100 focus:ring-0
                  "
                  placeholder="cth: Muh Fadhil Majid"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email</span>
                <input required onChange={(e)=> setEmail(e.target.value)} value={email}
                  type="email"
                  class="
                    mt-1
                    block
                    w-full
                    p-2
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-red-100 focus:ring-0
                  "
                  placeholder="example@gmail.com"
                />
              </label>
 
            <label class="block">
                <span class="text-gray-700">Nomor Handphone</span>
                <input required onChange={(e)=> setNumber(e.target.value)} value={number}
                  type="text"
                  class="
                    mt-1
                    block
                    w-full
                    p-2
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-red-100 focus:ring-0
                  "
                  placeholder="cth: 0895397455556"
                />
              </label>
                <label class="block">
                <span class="text-gray-700">Paket Website</span>
                <select required
                onChange={(e)=> setGetInfo(e.target.value)} value={getInfo}
                  class="
                    block
                    w-full
                    p-2
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-red-100 focus:ring-0
                  ">
                  <option >Landing Page</option>
                  <option >Premium Landing Page</option>
                  <option >Undangan</option>
                  <option >E-Commerce</option>
                </select>
              </label>
                <label class="block">
                <span class="text-gray-700">Tahu AEX Digital dari?</span>
                <select required
                onChange={(e)=> setGetInfo(e.target.value)} value={getInfo}
                  class="
                    block
                    w-full
                    p-2
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-red-100 focus:ring-0
                  ">
                  <option >Website</option>
                  <option >Instagram</option>
                  <option >Teman/keluarga</option>
                </select>
              </label>
                {/* <label class="block">
                <span class="text-gray-700">Program yang akan diikuti</span>
                <select
                  class="
                    block
                    w-full
                    p-2
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-red-100 focus:ring-0
                  ">
                  <option>Reguler</option>
                  <option>basic</option>
                  <option>Intermediate</option>
                  <option>Private</option>
                </select>
              </label> */}
                <button 
                className='button-primary mt-4'>
                kirim</button>
            </form>
            <button 
                className='bg-red-20 px- p- 
                font-semibold text-center 
                rounded-full mt-9'>
                <Link href={'/'}> &#8592; kembali</Link></button>
        </div>
    </section>
    )
}
