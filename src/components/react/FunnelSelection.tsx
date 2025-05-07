import type React from "react"

const FunnelSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-16 lg:px-24">
      {/* <div className="flex flex-col md:flex-row justify-between items-center mb-20">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-white text-4xl font-bold mb-6">Tráfico sin conversión</h2>
          <div className="relative w-64 mx-auto md:mx-0">
            <div className="bg-blue-900 h-24 rounded-t-full"></div>
            <div className="bg-blue-800 h-20 w-48 mx-auto"></div>
            <div className="bg-blue-700 h-16 w-32 mx-auto rounded-b-full"></div>
          </div>
          <p className="text-white mt-10 text-xl max-w-md">
            Si te sientes identificado, no estás solo
            <br />
            Pero no puedes seguir así.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="relative border-l-2 border-blue-600 pl-8 py-4 ml-4 md:ml-0">
            <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
            <p className="text-white/80 text-lg mb-2">Estás invirtiendo en publicidad, pero los leads no cierran.</p>
          </div>

          <div className="relative border-l-2 border-blue-600 pl-8 py-4 ml-4 md:ml-0">
            <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
            <p className="text-white/80 text-lg mb-2">Presencia digital débil</p>
          </div>

          <div className="relative border-l-2 border-blue-600 pl-8 py-4 ml-4 md:ml-0">
            <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
            <p className="text-white/80 text-lg mb-2">Tu web no representa el valor real de tu negocio</p>
          </div>

          <div className="relative border-l-2 border-blue-600 pl-8 py-4 ml-4 md:ml-0">
            <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
            <p className="text-white/80 text-lg mb-2">
              Estrategias desconectadas estás haciendo de todo un poco, pero sin dirección ni impacto.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-600 pl-8 py-4 ml-4 md:ml-0">
            <div className="absolute left-0 w-4 h-4 rounded-full bg-transparent transform -translate-x-1/2"></div>
            <p className="text-white/80 text-lg">Pérdida de tiempo con prospectos no cualificados</p>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row justify-between items-center mt-32">
        {/* <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-white text-4xl font-bold mb-6">Nuestra solución</h2>
          <div className="relative w-64 mx-auto md:mx-0">
            <div className="bg-blue-900 h-24 rounded-t-full"></div>
            <div className="bg-blue-800 h-20 w-48 mx-auto"></div>
            <div className="bg-blue-700 h-16 w-32 mx-auto rounded-b-full"></div>
          </div>
        </div> */}

        <div className="md:w-1/2">
          <p className="text-white text-xl mb-6">
            Diseñamos sistemas <span className="text-blue-500">digitales a medida</span> que convierten tráfico en
            ventas
          </p>
          <p className="text-white/80 mb-4">
            No hacemos plantillas
            <br />
            No hacemos promesas vacías.
          </p>
          <p className="text-white/80">
            Hacemos crecer marcas con procesos reales embudos bien pensados y clientes listos para ti.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FunnelSection
