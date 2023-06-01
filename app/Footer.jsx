import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsMailbox, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-3 md:p-9">
        <div className="footer-container flex flex-col gap-3 md:flex-row items-center">
            <Link href={'/'} className="footer-logo">
                <h4 className="text-xl md:text-3xl text-primary font-black">AEX</h4>
            </Link>
            <div className="sosmed flex gap-5 order-2 md:order-last md:gap-9">
                <Link className='rounded-full hover:bg-green-600 p-3 duration-500 ease-in-out transition-all'  
                href="https://www.wa.me/0895397455556" passHref  target="_blank" rel="noopener noreferrer">
                <BsWhatsapp size={25}/>
                </Link>
                <Link 
                href="https://www.instagram.com/refadhill" passHref className='rounded-full hover:bg-red-600 p-3 duration-500 ease-in-out transition-all' target="_blank" rel="noopener noreferrer">
                <BsInstagram size={25}/>
                </Link>
                <Link
                href="https://www.gmail.com/" passHref 
                className='rounded-full hover:bg-blue-600 p-3 duration-500 ease-in-out transition-all'  target="_blank" rel="noopener noreferrer">
                <FiMail size={25}/>
                </Link>
            </div>
              <Link href="https://www.aex.digital" passHref
        className="fw-light mx-auto font-light text-sm order-last md:order-2
         text-primary text-center self-end hover:text-secondary">
            Copyright © 2023 Powered by AEX Digital. All right reserved
            </Link>
            

        </div>
    </footer>
  )
}
