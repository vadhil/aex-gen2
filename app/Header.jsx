import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-transparent transparent
    fixed top-0 text-white w-screen
     p-11">
     <div className="flex justify-between">

    <div className="logo text-">Logo</div>
    <nav className="ms-aut mr-9  hidden gap-4 md:flex">
     <Link href={'/'}>translate</Link>
     <Link href={'/'}>pesan website</Link>
     <Link href={'/'}>tentang kami</Link>
    </nav>
    <div className="">
     <button type="checkbox">Menu</button>
    </div>
     </div>
 </header>
  )
}
