import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import About from 'components/About'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col bg-[#121212]`}>

      <Navbar />
      <Hero />
      <About />
    </div>
    
  )
}
