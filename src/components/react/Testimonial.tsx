import type React from "react"

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-24">
      <blockquote className="text-center">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold max-w-4xl mx-auto leading-tight">
          "Gracias a su sistema, multiplicamos x3 nuestras ventas en menos de 60 días."
        </p>
        <footer className="mt-6 text-white/60">Cliente X (PyME/Retail, nombre, industria)</footer>
      </blockquote>
    </section>
  )
}

export default Testimonial
