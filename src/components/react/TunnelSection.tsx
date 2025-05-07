import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'


const TunnelSection = () => {
  const tunnelPart1 = useRef<HTMLImageElement | null>(null)
  const tunnelPart2 = useRef<HTMLImageElement | null>(null)
  const tunnelPart3 = useRef<HTMLImageElement | null>(null)
  const line = useRef<SVGSVGElement | null>(null)
  const title1 = useRef<HTMLHeadingElement | null>(null)

  const p1 = useRef<HTMLParagraphElement | null>(null)
  const p2 = useRef<HTMLParagraphElement | null>(null)
  const p3 = useRef<HTMLParagraphElement | null>(null)
  const p4 = useRef<HTMLParagraphElement | null>(null)
  const p5 = useRef<HTMLParagraphElement | null>(null)



  const textRef = useRef<HTMLHeadingElement | null>(null)
  const textContainer = useRef<HTMLHeadingElement | null>(null)


  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.fromTo(
      p1.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p1.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      p2.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p2.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      p3.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p3.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      p4.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p4.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      p5.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p5.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  useEffect(() => {
    if (line.current) {
      const path = line.current.querySelector('line')
      if (!path) return

      const length = path.getTotalLength()

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: line.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (title1.current) {
      const title1Splitted = new SplitType(title1.current);

      gsap.fromTo(
        title1Splitted.chars, // Divides en caracteres
        {
          y: 50, // Empieza desplazado hacia abajo
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0, // Vuelve a su posición original
          stagger: 0.05, // Un pequeño retraso entre cada carácter
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title1.current,
            start: 'top 80%', // Cuando el top del elemento llega al 80% del viewport
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      tunnelPart1.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tunnelPart1.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      tunnelPart2.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tunnelPart2.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
    gsap.fromTo(
      tunnelPart3.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tunnelPart3.current,
          start: 'top 80%', // cuando el top del elemento llega al 80% del viewport
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])
  useEffect(() => {
    if (textRef.current) {
      const textRefSplitted = new SplitType(textRef.current, {
        types: 'words'

      });
      gsap.fromTo(textRefSplitted.lines, {
        y: 50, // Empieza desplazado hacia abajo
        opacity: 0,
      },
        {
          opacity: 1,
          y: 0, // Vuelve a su posición original
          stagger: 0.05, // Un pequeño retraso entre cada carácter
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%', // Cuando el top del elemento llega al 80% del viewport
            toggleActions: 'play none none none',
            scrub: 1,
          },
          markers: true,
        })
    }
  }, [textRef])


  return (
    <div className='p-10'>
      <section className='flex flex-col md:flex-row md:justify-center md:gap-10'>
        <div className='w-full md:w-[40%] flex justify-center items-center lg:items-start flex-col'>
          <h1 ref={title1} className='text-white text-center text-6xl pb-10 tunnelSection-title1 w-full lg:w-[340px] lg:text-start'>Tráfico sin conversión</h1>
          <div className='w-full flex justify-center items-center'>
            <div className='max-w-[350px] flex justify-center items-center flex-col w-[70%]'>
              <img ref={tunnelPart1} src="./Tunel-Part1.svg" alt="" />
              <img ref={tunnelPart2} className='-mt-2' src="./Tunel-Part2.svg" alt="" />
              <img ref={tunnelPart3} className='-mt-5' src="./Tunel-Part3.svg" alt="" />
            </div>
          </div>
          <p className='text-xl text-center p-7'>Si te sientes identificado, no estás solo.</p>
        </div>
        <div className='w-full md:w-[40%] flex justify-center items-center flex-col'>
          <div className='flex p-2'>
            <div className='relative flex flex-col gap-10 justify-center items-center w-[min-content] mr-6'>
              <svg
                ref={line}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] -ml-2"
                viewBox="0 0 2 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="1" y1="0" x2="1" y2="100" stroke="#2563EB" strokeWidth="2" />
              </svg>
            </div>
            <div className='py-10 text-[#AEACAE] text-lg flex flex-col gap-10'>

              <div className='relative' ref={p1}>
                <p>Estás invirtiendo en publicidad, pero los leads no cierran.</p>
                <span className='absolute top-1/2 -left-10 transform -translate-y-1/2 w-[14px] h-[14px] bg-[#2563EB] rounded-full'></span>
              </div>
              <div className='relative' ref={p2}>
                <p>Presencia digital débil</p>
                <span className='absolute top-1/2 -left-10 transform -translate-y-1/2 w-[14px] h-[14px] bg-[#2563EB] rounded-full'></span>
              </div>
              <div className='relative' ref={p3}>
                <p>Tu web no representa el valor real de tu negocio</p>
                <span className='absolute top-1/2 -left-10 transform -translate-y-1/2 w-[14px] h-[14px] bg-[#2563EB] rounded-full'></span>
              </div>
              <div className='relative' ref={p4}>
                <p>Estrategias desconectadas estás haciendo de todo un poco, pero sin dirección ni impacto.</p>
                <span className='absolute top-1/2 -left-10 transform -translate-y-1/2 w-[14px] h-[14px] bg-[#2563EB] rounded-full'></span>
              </div>
              <div className='relative' ref={p5}>
                <p>Pérdida de tiempo con prospectos no cualificados</p>
                <span className='absolute top-1/2 -left-10 transform -translate-y-1/2 w-[14px] h-[14px] bg-[#2563EB] rounded-full'></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-20'>
        <h1 ref={textRef} className='text-6xl pt-10 pb-20 w-full text-center'>Nuestra Solución</h1>
        <div ref={textContainer} className='w-[100%] flex flex-col md:flex-row justify-center items-center'>
          <div className='md:max-w-[440px] w-full md:w-[40%]'>
            <div className='w-full flex justify-center items-center'>
              <div className='max-w-[350px] flex justify-center items-center flex-col w-[70%]'>
                <img src="./Tunel-Part1.svg" alt="" />
                <img className='-mt-2' src="./Tunel-Part2.svg" alt="" />
                <img className='-mt-5' src="./Tunel-Part3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='p-10 w-full md:w-[40%]'>
            <p className='text-xl pb-7'>Diseñamos sistemas <span className='text-blue-500'>digitales a medida</span> que convierten tráfico en ventas</p>
            <p className='text-white/80'>No hacemos plantillas</p>
            <p className='text-white/80'>No hacemos promesas vacías.</p>
            <p className='text-white/80'>Hacemos crecer marcas con procesos reales embudos bien pensados y clientes listos para ti.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TunnelSection