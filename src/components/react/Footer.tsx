import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='flex flex-col p-10 max-sm:p-5 lg:p-20 lg:pb-10  bg-gradient-to-r from-black via-gray-950 to-black '>
      <div className='max-w-[1700px] mx-auto w-full'>
      <div className='lg:flex justify-between items-center   '>
        <h2 className='text-5xl max-sm:text-3xl font-bold py-5 md:w-[450px]  max-sm:text-center max-sm:w-full'>¿Listo para transformar tu negocio?</h2>
        <div className='lg:flex flex-col justify-center '>
          <p className='font-medium pb-5 md:w-[450px] max-sm:text-center max-sm:'>Estamos aquí para ayudarte a escalar, automatizar y lograr resultados reales. ¡Conversemos!</p>
          <div className='pb-20 lg:pb-10 max-sm:pb-8'>
          <a
						href="#get-started"
						className="group relative inline-flex items-center text-center px-6 py-3 overflow-hidden rounded-full text-white text-lg max-sm:text-base font-medium max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-10/12 max-sm:mx-auto"
					>
						{/* Button background layers */}
						<span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x bg-size-200"></span>
						
						{/* Hover reveal layer */}
						<span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/10"></span>
						
						{/* Light beam effect on hover */}
						<span className="absolute h-full w-1/6 bg-white/20 skew-x-[20deg] -translate-x-40 group-hover:translate-x-[32rem] transition-transform duration-700"></span>
						
					
						
						{/* Button content with animated arrow */}
						<span className="relative flex items-center">
							<span>AGENDA UNA CITA AHORA</span>
					
						</span>
					</a>
          </div>
          <ul className='flex justify-between text-white/40 max-sm:flex-col gap-3 mb-4   '>
            <li className='hover:text-white transition-colors cursor-pointer'>Privacy Policy</li>
            <li className='hover:text-white transition-colors cursor-pointer'>Terms</li>
            <li className='text-white cursor-pointer'>suppor@tallgiardini.com</li>
          </ul>
        </div>
      </div>
      <ul className='flex gap-10 pb-12 max-sm:pb-3 '>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaFacebookF className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaLinkedinIn className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaInstagram className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaXTwitter className='size-5' /></li></a>
        <a className='transition-transform duration-200 hover:scale-125' href=''><li><FaYoutube className='size-5' /></li></a>
      </ul>

      </div>

     
    </section>
  )
}

export default Footer