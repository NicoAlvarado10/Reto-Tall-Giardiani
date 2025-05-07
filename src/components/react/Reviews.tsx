import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GoArrowLeft, GoArrowRight, GoStarFill } from "react-icons/go";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SplitType from 'split-type'
import gsap from 'gsap'


const reviews = [
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
  {
    name: 'Jeannie Grant',
    date: 'June 01, 2023',
    img: './person.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa quis odio nisi, labore officiis ullam voluptas fuga, placeat sunt rem, consequatur nobis.',
  },
]

const Reviews = () => {
  const reviewsContainer = useRef<HTMLDivElement | null>(null);


  const prevButton = useRef<HTMLDivElement | null>(null);
  const nextButton = useRef<HTMLDivElement | null>(null);
  const title1 = useRef<HTMLHeadingElement | null>(null);



  useEffect(() => {
    if (title1.current) {
      const text = new SplitType(title1.current, {
        types: 'chars,words',
      })
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: title1.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
          markers: false
        },
        opacity: 0.2,
        stagger: 0.1
      })
    }
    if (prevButton && nextButton) {
      gsap.to(prevButton.current, {

      })
    }
  }, [title1])

  const [navigationReady, setNavigationReady] = useState(false)
  useEffect(() => {
    // Forzamos que se monte el Swiper una vez que los refs estén disponibles
    setNavigationReady(true)
  }, [])

  useEffect(() => {
    if (reviewsContainer.current) {
      gsap.fromTo(reviewsContainer.current, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: reviewsContainer.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        }
      }
      )
    }
  })

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
    <div className="w-full p-10 overflow-hidden">
      <div className='pb-20 md:p-10 xl:p-24'>
        <h3 className='text-lg'>Confiado por <span className='text-purple-600 font-bold'>1200+</span> compañías</h3>
        <h1 ref={title1} className='pb-10 text-4xl w-[100%] py-3 font-bold md:text-7xl xl:w-[60%] md:text-[#ffffff]'>No confíe de nuestra palabra, vea lo que dicen nuestros clientes</h1>
        <p className='text-white/80 md:w-[60%] text-xl text-[#a1a1a1]'>Nos enorgullece trabajar con empresas de todos los tamaños, desde startups hasta corporaciones reconocidas. Nuestro compromiso con la calidad y la atención al cliente ha generado relaciones duraderas. <span className='pt-3 pb-10 block text-white font-medium'>Descubre cómo hemos ayudado a otros a alcanzar sus metas.</span>
        </p>
      </div>
      {navigationReady && (
        <div ref={reviewsContainer} className='xl:px-40'>
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
                <div className='p-5 gap-3 w-full flex flex-col justify-start bg-[#0C0B0E] border-[#151518] border-[1.5px] rounded-xl'>
                  <div className='flex justify-center items-center gap-2 w-min'>
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className='h-6 w-6 bg-green-400 flex justify-center items-center'>
                        <GoStarFill />
                      </div>
                    ))}
                  </div>
                  <p className='w-[100%]'>{review.text}</p>
                  <div className='flex items-center gap-3'>
                    <img className='w-[50px] h-[50px] rounded-full' src={review.img} alt={review.name} />
                    <div>
                      <p className='font-bold'>{review.name}</p>
                      <p className='-mt-2 text-white/80'>{review.date}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>))}

          </Swiper>
        </div>
      )}

      <div className='my-10 w-full item-center justify-center flex gap-20'>
        <div onMouseEnter={() => animateButtonHover(prevButton.current, true)} onMouseLeave={() => animateButtonHover(prevButton.current, false)} ref={prevButton} className='cursor-pointer w-[50px] h-[50px] bg-transparent rounded-full flex items-center justify-center border-[#ffffff] border-[1.5px]' >
          <GoArrowLeft className='size-5' />
        </div>
        <div onMouseEnter={() => animateButtonHover(nextButton.current, true)} onMouseLeave={() => animateButtonHover(nextButton.current, false)} ref={nextButton} className='cursor-pointer w-[50px] h-[50px] bg-transparent rounded-full flex items-center justify-center border-[#ffffff] border-[1.5px]' >
          <GoArrowRight className='size-5' />
        </div>
      </div>
    </div>
  )
}

export default Reviews