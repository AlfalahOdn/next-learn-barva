import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import About from 'components/About'
import Contact from 'components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`bg-white`}>

      <Navbar />
      <Hero />
      <div className="p-2 max-w-7xl  mx-auto bg-white">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>
      <Contact />
      </div>
    </div>
    
  )
}
