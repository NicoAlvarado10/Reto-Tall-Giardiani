import type React from "react"

const ModelSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-24">
      <h2 className="text-white text-4xl font-bold mb-16">Nuestro modelo</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-white text-2xl font-semibold mb-4">Diagnóstico estratégico</h3>
          <p className="text-white/70">Analizamos tu negocio y tus objetivos reales.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <h3 className="text-white text-2xl font-semibold mb-4">Diseño del sistema de ventas digital</h3>
          <p className="text-white/70">Creamos su estructura personalizada, adaptado a tus necesidades.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-transparent border-2 border-blue-500 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-white text-2xl font-semibold mb-4">Ejecución, optimización y resultados</h3>
          <p className="text-white/70">Lanzamos, medimos, y trackeamos. Sin humo. Sin bullshit.</p>
        </div>
      </div>
    </section>
  )
}

export default ModelSection
