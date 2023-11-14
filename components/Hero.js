import React from 'react'
import Image from 'next/image'
import Gambar from '/public/hero.png'
import 'tailwindcss/tailwind.css'

const Hero = () => {
  return (
    <section className='bg-slate-100 p-5'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-6 md:w-1/2'>
                <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>Milenials IT Solution</h1>
                <p className='max-w-sm text-center text-slate-500 md:text-left text-semibold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='text-center md:text-left '>
                    <button href='/' className='bg-gray-700 hover:bg-gray-800 text-white rounded-full text-center w-1/2 py-2 px-0
                    font-bold cursor-pointer'>
                        Consult Now
                    </button>
                    </div>
            </div>
            <div>
                <Image src={Gambar} width='500' height='500'></Image>
            </div>
        </div>
    </section>
  )
}

export default Hero