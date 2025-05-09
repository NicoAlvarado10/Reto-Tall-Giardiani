import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    title: "¿Tu embudo de ventas funciona?",
    desc: "¿Estás perdiendo clientes porque no sabes qué paso darles después?",
  },
  {
    title: "¿Tus esfuerzos de marketing están funcionando?",
    desc: "Si no mides resultados, nunca sabrás qué estrategia te da más ventas.",
  },
  {
    title: "¿Tus clientes vuelven a comprar en tu negocio?",
    desc: "Si solo compran una vez, ¿qué motivos tienen para elegirte de nuevo?",
  },
  {
    title: "¿Dependes solo de Instagram o Google Ads?",
    desc: "Si cambian las reglas, podrías quedarte sin nuevas ventas de un día para otro.",
  },
  {
    title: "¿Te sientes identificado?",
    desc: "Estas en el lugar correcto. ¿Listo para despegar?",
  },
];



export default function TunnelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollLength, setScrollLength] = useState(0);

  // Función para medir y configurar GSAP
  const setupAnimation = () => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    // Limpio scrollTrigger anterior
    ScrollTrigger.getAll().forEach(st => st.kill());
    gsap.killTweensOf(container);

    const totalScroll = container.scrollWidth;
    const viewport = window.innerWidth;
    const distance = totalScroll - viewport;

    setScrollLength(distance);

    gsap.to(container, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${distance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  };

  useEffect(() => {
    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    return () => {
      window.removeEventListener("resize", setupAnimation);
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(containerRef.current);
    };
  }, []);

  return (
    <div style={{ height: `${scrollLength}px` }} className="relative">
      <section
        ref={sectionRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div
          ref={containerRef}
          className="flex h-full items-center"
        >
          {problems.map((item, i) => (
            <div
              key={i}
              className="min-w-[100vw]  h-full
                         bg-gradient-to-r from-black via-gray-950 to-black
                         shadow-lg p-10 flex flex-col justify-center items-center "
            >
              <h3 className="text-4xl sm:text-5xl text-center md:text-6xl lg:text-6xl font-bold text-white leading-tight overflow-hidden">
							  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x">
                  {item.title}
							  </span>
				    </h3>

              <p className="text-white text-center mt-4 text-2xl max-sm:text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}









