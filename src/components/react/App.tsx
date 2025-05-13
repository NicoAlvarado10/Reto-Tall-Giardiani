import gsap from "gsap"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import InfiniteMarqueeComponent from "./InfiniteMarquee"
import ModelSection from "./ModelSection"
import Reviews from "./Reviews"
import TunnelSection from "./TunnelSection"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from "react"


export const App = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      // calcular el movimiento suave
      const dx = mouse.current.x - pos.current.x
      const dy = mouse.current.y - pos.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)

      // **delay** en el movimiento para mantener el cursor detrás del mouse
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1

      // Calcula un "efecto de arrastre" para que el cursor se aleje un poco más
      const offsetX = dx * 0.2 // ajustado para más suavidad
      const offsetY = dy * 0.2 // ajustado para más suavidad

      // Aplica el movimiento al cursor sin deformarlo
      gsap.to(cursorRef.current, {
        x: pos.current.x - 6 - offsetX, // mantén un pequeño desfase
        y: pos.current.y - 6 - offsetY, // mantén un pequeño desfase
        rotation: angle,
        scaleX: 1 + distance / 400, // ajusta para evitar el alargamiento
        scaleY: 1 + distance / 400, // ajusta para evitar el alargamiento
        ease: "power2.out", // Suaviza el movimiento
        duration: 0.1, // Puedes ajustar la duración si es muy rápido o lento
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])


  return (
    <ReactLenis root>
      <main className="overflow-hidden relative" style={{ backgroundColor: "#0a0a0a", color: "white" }}>
        <div ref={cursorRef} className="pointer fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full pointer-events-none z-[9999]"
        ></div>
        <Header />
        <Hero />
        <InfiniteMarqueeComponent />
        <TunnelSection />
        <ModelSection />

        <Reviews />
        <Footer />
  
        
      </main>
    </ReactLenis>
  )
}