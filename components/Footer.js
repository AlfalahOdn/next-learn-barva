import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 p-8 text-white flex-shrink-0'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-wrap justify-between'>
          <div className='text-center md:text-left w-full md:w-1/2 mb-4 md:mb-4'>
            <div className='text-xl font-bold md:text-4xl mb-1'>
              Barvalabs
            </div>
            <div className='font-normal md:text-sm text-xs'>
              Your Onestop IT Solution.
            </div>
          </div>
          <div className='w-full md:w-1/2 mb-4 md:mb-4 text-center md:text-left'>
            <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left'>
            <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
            <div className='space-x-4'>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
