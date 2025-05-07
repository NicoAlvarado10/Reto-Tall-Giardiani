import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col p-10 lg:p-20'>
      <div className='lg:flex justify-between itetms-center'>
        <h1 className='text-5xl font-bold pb-5 md:w-[450px]'>¿Listo para transformar tu negocio?</h1>
        <div className='lg:flex flex-col justify-center'>
          <p className='font-medium pb-5 md:w-[450px] '>Estamos aquí para ayudarte a escalar, automatizar y lograr resultados reales. ¡Conversemos!</p>
          <div className='pb-20 lg:pb-10'>
            <button className='font-medium py-3 px-6 bg-[#8330C2] rounded-full'>AGENDA UNA CITA AHORA</button>
          </div>
          <ul className='flex justify-between text-white/40 hidden lg:flex'>
            <li className='hover:text-white transition-colors cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-white transition-colors cursor-pointer'>Terms</li>
            <li className='text-white cursor-pointer'>suppor@tallgiardini.com</li>
          </ul>
        </div>
      </div>
      <ul className='flex gap-10 pb-12'>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaFacebookF className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaLinkedinIn className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaInstagram className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaXTwitter className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaYoutube className='size-5' /></li></a>
      </ul>
      <ul className='flex justify-between text-white/40 lg:hidden'>
        <li className='hover:text-white transition-colors cursor-pointer'>Privacy Policy</li>
        <li className='hover:text-white transition-colors cursor-pointer'>Terms</li>
        <li className='text-white cursor-pointer'>suppor@tallgiardini.com</li>
      </ul>

    </div>
  )
}

export default Footer