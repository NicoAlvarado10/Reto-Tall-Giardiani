import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { FaArrowUpRightDots } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md'
import { PiStrategy } from 'react-icons/pi'

const ModelSection = () => {
  const card1 = useRef<(HTMLDivElement | null)>(null)
  const card2 = useRef<(HTMLDivElement | null)>(null)
  const card3 = useRef<(HTMLDivElement | null)>(null)

  const lastPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement | null, color: string) => {
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      lastPosition.current = { x, y }

      gsap.to(card, {
        background: `radial-gradient(circle at ${x}px ${y}px, ${color}, #101216 80%)`,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = (card: HTMLDivElement | null) => {
      if (!card) return

      const { x, y } = lastPosition.current

      gsap.to(card, {
        background: `radial-gradient(circle at ${x}px ${y}px, transparent, #101216 80%)`,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const cardActions = (card: HTMLDivElement | null, color: string) => {
      if (!card) return
      const handleMove = (e: MouseEvent) => handleMouseMove(e, card, color)
      const handleLeave = () => handleMouseLeave(card)

      card.addEventListener('mousemove', handleMove)
      card.addEventListener('mouseleave', handleLeave)

      return () => {
        card.removeEventListener('mousemove', handleMove)
        card.removeEventListener('mouseleave', handleLeave)
      }
    }

    const card1Cleanup = cardActions(card1.current, 'rgba(18, 198, 84, 0.65)')
    const card2Cleanup = cardActions(card2.current, 'rgba(217, 203, 37, 0.65)')
    const card3Cleanup = cardActions(card3.current, 'rgba(14, 212, 223, 0.65)')

    return () => {
      card1Cleanup?.()
      card2Cleanup?.()
      card3Cleanup?.()
    }
  }, [])



  return (
    <div className='p-10 flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-5xl font-medium'>Así diseñamos embudos que realmente convierten</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div ref={card1} className='xl:h-[480px] px-5 py-10 md:px-10 bg-[#101216] rounded-xl  max-w-[440px] flex flex-col'>
          <div>
            <div className='bg-[#181A20] mb-6 rounded-full w-[60px] h-[60px] flex justify-center items-center'>
              <PiStrategy className='size-10' />
            </div>
            <h3 className='text-3xl my-2 w-min'>Diagnóstico Estratégico</h3>
          </div>
          <div className='flex flex-col justify-between h-full'>
            <p className="text-white/70 text-normal xl:w-[80%]">Analizamos tu negocio y tus objetivos reales.</p>
            <p className='text-sm text-[#7a7a7a]'>Analizamos tu negocio, tu audiencia y tu propuesta de valor para identificar los puntos clave que necesitas optimizar. Sin diagnóstico, no hay dirección.</p>
          </div>
        </div>
        <div ref={card2} className='xl:h-[480px] px-5 md:px-10 flex flex-col justify-between py-10 bg-[#101216] rounded-xl  max-w-[440px]'>
          <div>
            <div className='bg-[#181A20] mb-6 rounded-full w-[60px] h-[60px] flex justify-center items-center'>
              <MdOutlineDesignServices className='size-7' />
            </div>
            <h3 className='text-3xl my-2 '>Diseño de ventas del sistema digital</h3>
            <p className="text-white/70 text-normal xl:w-[80%]">Creamos su estructura personalizada, adaptado a tus necesidades.</p>
          </div>
          <p className='text-sm text-[#7a7a7a]'>Creamos una estructura personalizada de embudo que se adapta a tu tipo de producto, tu proceso de conversión y el comportamiento de tus potenciales clientes.
          </p>

        </div>
        <div ref={card3} className='xl:h-[480px] px-5 md:px-10 py-10 bg-[#101216] flex flex-col justify-between rounded-xl  max-w-[440px]'>
          <div>
            <div className='bg-[#181A20] mb-6 rounded-full w-[60px] h-[60px] flex justify-center items-center'>
              <FaArrowUpRightDots className='size-7' />
            </div>
            <h3 className='text-3xl my-2'>Ejecución y optimización de resultados</h3>
            <p className="text-white/70 text-normal xl:w-[80%]">Lanzamos, medimos, y trackeamos. Sin humo. Sin bullshit</p>
          </div>
          <p className='text-sm text-[#7a7a7a]'>Ponemos todo en marcha: automatizaciones, páginas, emails, integraciones y herramientas necesarias para que tu sistema empiece a trabajar por ti.</p>
        </div>
      </div>
    </div>
  )
}

export default ModelSection