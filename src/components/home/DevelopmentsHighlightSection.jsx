import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'

function DevelopmentsHighlightSection({ images }) {
  const { ref, isVisible } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="-mx-[calc(50dvw-50%)] w-dvw overflow-hidden bg-slate-100 py-10 text-slate-800 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <h3 className="font-display text-4xl uppercase leading-none text-slate-700 sm:text-5xl">Empreendimentos</h3>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">Projetos sempre pensando na familia.</p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
            Conheça alguns empreendimentos que representam nosso padrão de qualidade, 
            planejamento técnico e foco na satisfação de cada cliente.
          </p>
          <Link
            to="/empreendimentos"
            className="mt-8 inline-block rounded-full border-2 bg-sky-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-500 sm:px-8"
          >
            Quero Conhecer
          </Link>
        </div>

        <div
          className={`grid grid-cols-2 gap-2 transition-all delay-150 duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-32 w-full object-cover sm:h-44 md:h-52"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentsHighlightSection
