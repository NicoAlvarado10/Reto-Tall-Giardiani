import type React from "react"

const CallToAction: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-16 lg:px-24 flex justify-center">
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-medium px-8 py-3 rounded-lg transition-colors"
      >
        Agenda una llamada estratégica
      </a>
    </section>
  )
}

export default CallToAction
