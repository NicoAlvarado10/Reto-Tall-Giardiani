import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { FaArrowUpRightDots } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md'
import { PiStrategy } from 'react-icons/pi'
import { motion } from 'framer-motion'
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

    const card1Cleanup = cardActions(card1.current, '   rgba(29, 78, 216, 1)')
    const card2Cleanup = cardActions(card2.current, 'rgba(168, 85, 247, 1)')
    const card3Cleanup = cardActions(card3.current, ' rgba(29, 78, 216, 1)')

    return () => {
      card1Cleanup?.()
      card2Cleanup?.()
      card3Cleanup?.()
    }
  }, [])



  return (
    <section className='mt-[110vh] max-2xl:mt-[100vh] p-10 py-24 max-sm:p-5 flex flex-col gap-10 justify-center items-center ' id='exito'>
      <motion.h2 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8}}
      className='text-5xl font-medium max-sm:text-3xl mt-5 max-sm:text-center'>Así diseñamos embudos que realmente convierten</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1700px]
      ">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.2}}
      ref={card1} 
      className='group  p-10 max-sm:p-5 flex flex-col gap-4 justify-between   bg-[#101216] rounded-xl w-full'>
      
          <div className='bg-[#181A20]  rounded-full w-[60px] h-[60px] flex justify-center items-center'>
            <PiStrategy className='size-10' />
          </div>
          <h3 className='text-3xl max-sm:text-2xl my-2 '>Diagnóstico Estratégico</h3>
      

          <h4 className="text-white/70 text-normal group-hover:text-white">Analizamos tu negocio y tus objetivos reales.</h4>
          <p className=' text-[#7a7a7a] group-hover:text-white'>Analizamos tu negocio, tu audiencia y tu propuesta de valor para identificar los puntos clave que necesitas optimizar. Sin diagnóstico, no hay dirección.</p>
   
      </motion.article>

      <motion.article
       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.4}}
      ref={card2} 
      className='group  p-10 max-sm:p-5 flex flex-col justify-between gap-4  bg-[#101216] rounded-xl w-full'>

          <div className='bg-[#181A20] rounded-full w-[60px] h-[60px] flex justify-center items-center'>
            <MdOutlineDesignServices className='size-10' />
          </div>
          <h3 className='text-3xl max-sm:text-2xl my-2'>Diseño de ventas del sistema digital</h3>
          <p className="text-white/70 text-normal group-hover:text-white">Creamos su estructura personalizada, adaptado a tus necesidades.</p>

        <p className=' text-[#7a7a7a] group-hover:text-white'>Creamos una estructura personalizada de embudo que se adapta a tu tipo de producto, tu proceso de conversión y el comportamiento de tus potenciales clientes.</p>
      </motion.article>

      <motion.article
       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.6}}
      ref={card3} 
      className='group   p-10 max-sm:p-5 flex flex-col justify-between gap-4  bg-[#101216] rounded-xl w-full '>

          <div className='bg-[#181A20] rounded-full w-[60px] h-[60px] flex justify-center items-center '>
            <FaArrowUpRightDots className='size-10' />
          </div>
          <h3 className='text-3xl max-sm:text-2xl my-2'>Ejecución y optimización de resultados</h3>
          <h4 className="text-white/70 text-normal group-hover:text-white">Lanzamos, medimos, y trackeamos. Sin humo. Sin bullshit</h4>

        <p className=' text-[#7a7a7a] group-hover:text-white'>Ponemos todo en marcha: automatizaciones, páginas, emails, integraciones y herramientas necesarias para que tu sistema empiece a trabajar por ti.</p>
      </motion.article>

      </div>
    </section>
  )
}

export default ModelSection