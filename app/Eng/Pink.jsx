"use client"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../config/firebase-config';

export default function Pink() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');

  const router = useRouter();

  const CreateHandler = async () => {
    await addDoc(collection(db, 'consult'), {
      time: serverTimestamp(),
      name,
      email,
      hp,
    });
    router.push('/');
  };

  return (
    <section className="bg-secondary py-16" id="EngPink">
      <div className="bg-secondary">
        <h2 className="sub-title-primary">FREE CONSULTATION TO CREATE <br /> YOUR DREAM WEBSITE</h2>
        <p className="text-center text-gray-500 py-5">Tell us your goals and your dream website</p>
        <div className="pink-container flex flex-col gap-9 justify-center items-center px-2">
          <form onSubmit={CreateHandler} className="flex flex-col gap-3 
          py-">
            <label className="block">
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="input-primary"
                placeholder="Full Name"
                type="text"
              />
            </label>
            <label className="block w-96">
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="input-primary"
                placeholder="Email Address"
              />
            </label>
            <label className="block w-96">
              <input
                required
                onChange={(e) => setHp(e.target.value)}
                value={hp}
                type="text"
                className="input-primary"
                placeholder="Phone Number (optional)"
              />
            </label>
            <div className="flex justify-center">
              <button type="submit" className="button-primary mt-5">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
