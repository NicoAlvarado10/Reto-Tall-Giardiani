
import 'swiper/css'
import 'swiper/css/pagination'
import { useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GoArrowLeft, GoArrowRight, GoStarFill } from "react-icons/go"
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Excelente servicio, superó nuestras expectativas. La comunicación fue fluida y el proyecto entregado a tiempo.',
  },
  {
    name: 'John Smith',
    date: 'May 15, 2023',
    img: './person.jpg',
    text: 'Muy profesional y comprometido con el proyecto. Su atención a los detalles hizo la diferencia.',
  },
  {
    name: 'Sarah Johnson',
    date: 'April 20, 2023',
    img: './person.jpg',
    text: 'Recomiendo totalmente sus servicios. La calidad del trabajo fue excelente, y la experiencia fue muy satisfactoria.',
  },
  {
    name: 'Mark Davis',
    date: 'March 10, 2023',
    img: './person.jpg',
    text: 'La colaboración fue impecable, y su capacidad para entender nuestras necesidades fue clave para el éxito del proyecto.',
  },
  {
    name: 'Emily Clark',
    date: 'February 18, 2023',
    img: './person.jpg',
    text: 'Impresionante trabajo, el equipo fue muy atento y superó nuestras expectativas en todo momento.',
  },
  {
    name: 'Michael Brown',
    date: 'January 25, 2023',
    img: './person.jpg',
    text: 'Un profesional de alto nivel. Agradezco el esfuerzo puesto en cada detalle y la puntualidad en la entrega.',
  },
  {
    name: 'Olivia Williams',
    date: 'December 12, 2022',
    img: './person.jpg',
    text: 'Gran calidad en todo lo que hace. Fue un placer trabajar con alguien tan dedicado y apasionado por lo que hace.',
  },
  {
    name: 'James Miller',
    date: 'November 5, 2022',
    img: './person.jpg',
    text: 'Recomiendo al 100%. Su dedicación y conocimiento fueron claves para que el proyecto fuera un éxito rotundo.',
  },
]

const Reviews = () => {

    const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <section className="w-full mt-10 px-10 py-20 max-sm:p-5 overflow-hidden" id='testimony'>
      <div className="pb-20 max-w-[1700px] mx-auto">
        <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8}}
        className="text-lg fade-up">
          
          Confiado por <span className="text-purple-600 font-bold">1200+</span> compañías
        </motion.h3>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2}}
        className="pb-10 text-4xl w-full py-3 font-bold md:text-7xl max-sm:text-3xl xl:w-[60%]  md:text-[#ffffff] ">
          No confíe de nuestra palabra, vea lo que dicen nuestros clientes
        </motion.h2>
       
        <motion.p
         initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4}}
        className="text-white/80 md:w-[60%] text-xl text-[#a1a1a1] fade-up ">
          Nos enorgullece trabajar con empresas de todos los tamaños, desde startups hasta corporaciones reconocidas.
          Nuestro compromiso con la calidad y la atención al cliente ha generado relaciones duraderas.
          <motion.span
           initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6}}
          className="pt-3 pb-10 block text-white font-medium">
            Descubre cómo hemos ayudado a otros a alcanzar sus metas.
          </motion.span>
        </motion.p>
      </div>

      <div className="max-w-[1700px] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            '@0.00': { slidesPerView: 1, spaceBetween: 10 },
            '@0.75': { slidesPerView: 2, spaceBetween: 20 },
            '@1.00': { slidesPerView: 3, spaceBetween: 10 },
            '@1.50': { slidesPerView: 3, spaceBetween: 30 },
          }}
           navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 gap-3 w-full flex flex-col h-full justify-between bg-[#0C0B0E] border-[#151518] border-[1.5px] rounded-xl fade-up">
                <div className="flex justify-center items-center gap-2 w-min">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="h-6 w-6 text-yellow-400 flex justify-center items-center">
                      <GoStarFill />
                    </div>
                  ))}
                </div>
                <p className="w-[100%]">{review.text}</p>
                <div className="flex items-center gap-3">
                  <img className="w-[50px] h-[50px] rounded-full" src={review.img} alt={review.name} />
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="-mt-2 text-white/80">{review.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="my-10 w-full item-center justify-center flex gap-20">
        <div
        ref={prevRef}
         className="cursor-pointer w-[50px] h-[50px] bg-transparent rounded-full flex items-center justify-center border-[#ffffff] border-[1.5px] fade-up">
          <GoArrowLeft className="size-5" />
        </div>
        <div
        ref={nextRef}
        className="cursor-pointer w-[50px] h-[50px] bg-transparent rounded-full flex items-center justify-center border-[#ffffff] border-[1.5px] fade-up">
          <GoArrowRight className="size-5" />
        </div>
      </div>
    </section>
  )
}

export default Reviews
