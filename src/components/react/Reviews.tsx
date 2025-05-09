import React, { useRef, useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GoArrowLeft, GoArrowRight, GoStarFill } from "react-icons/go"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const prevButton = useRef<HTMLDivElement | null>(null)
  const nextButton = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')
    elements.forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const breakpointsResponsive = {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '@1.50': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }

  const animateButtonHover = (el: HTMLDivElement | null, enter: boolean) => {
    if (el) {
      gsap.to(el, {
        scale: enter ? 0.9 : 1,
        duration: enter ? 0.2 : 0.6,
        ease: enter ? 'power1.out' : 'elastic.out(1,0.4)',
      })
    }
  }

  return (
    <div className="w-full mt-10 px-10 py-20 max-sm:p-5 overflow-hidden">
      <div className="pb-20 max-w-[1700px] mx-auto">
        <h3 className="text-lg fade-up">
          Confiado por <span className="text-purple-600 font-bold">1200+</span> compañías
        </h3>
        <h2 className="pb-10 text-4xl w-full py-3 font-bold md:text-7xl max-sm:text-3xl xl:w-[60%] md:text-[#ffffff] fade-up">
          No confíe de nuestra palabra, vea lo que dicen nuestros clientes
        </h2>
        <p className="text-white/80 md:w-[60%] text-xl text-[#a1a1a1] fade-up">
          Nos enorgullece trabajar con empresas de todos los tamaños, desde startups hasta corporaciones reconocidas. Nuestro compromiso con la calidad y la atención al cliente ha generado relaciones duraderas.
          <span className="pt-3 pb-10 block text-white font-medium">
            Descubre cómo hemos ayudado a otros a alcanzar sus metas.
          </span>
        </p>
      </div>

      <div className="max-w-[1700px] mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={breakpointsResponsive}
          loop={true}
          navigation={{
            nextEl: nextButton?.current,
            prevEl: prevButton?.current,
          }}
          modules={[Navigation]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 fade-up gap-3 w-full flex flex-col h-full justify-between bg-[#0C0B0E] border-[#151518] border-[1.5px] rounded-xl">
                <div className="flex justify-center items-center gap-2 w-min">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="h-6 w-6 text-yellow-400 flex justify-center items-center">
                      <GoStarFill />
                    </div>
                  ))}
                </div>
                <p className="w-full">{review.text}</p>
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
          onMouseEnter={() => animateButtonHover(prevButton.current, true)}
          onMouseLeave={() => animateButtonHover(prevButton.current, false)}
          ref={prevButton}
          className="cursor-pointer w-[50px] h-[50px] bg-transparent rounded-full flex items-center justify-center border-[#ffffff] border-[1.5px]"
        >
          <GoArrowLeft className="size-5" />
        </div>
        <div
          onMouseEnter={() => animateButtonHover(nextButton.current, true)}
          onMouseLeave={() => animateButtonHover(nextButton.current, false)}
          ref={nextButton}
          className="cursor-pointer w-[50px] h-[50px] bg-transparent rounded-full flex items-center justify-center border-[#ffffff] border-[1.5px]"
        >
          <GoArrowRight className="size-5" />
        </div>
      </div>
    </div>
  )
}

export default Reviews
