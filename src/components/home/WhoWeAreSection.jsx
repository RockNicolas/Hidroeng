import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'

function WhoWeAreSection({ image }) {
  const { ref, isVisible } = useInView({ threshold: 0.25 })

  return (
    <section ref={ref} className="-mx-[calc(50dvw-50%)] w-dvw overflow-hidden bg-slate-100 py-8 text-slate-800 sm:py-10">
      <div className="mx-auto grid max-w-6xl items-stretch gap-4 px-4 sm:px-6 md:grid-cols-[1.75fr_1fr] md:gap-6">
        <div
          className={`flex h-[240px] items-center justify-center bg-slate-100 transition-all duration-1000 sm:h-[320px] md:h-[420px] ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <img src={image} alt="Empreendimento moderno Hidroeng" className="h-full w-full object-cover" />
        </div>
        <div
          className={`flex items-center px-4 py-6 transition-all delay-150 duration-1000 sm:px-7 sm:py-8 md:px-6 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >
          <div>
            <p className="font-display text-4xl uppercase leading-none text-slate-700 sm:text-5xl">Quem somos</p>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              A Hidroeng é uma empresa de engenharia e infraestrutura comprometida com qualidade, 
              segurança e resultados. Atuamos em projetos de diferentes portes, construindo soluções 
              duráveis e relações de confiança com nossos clientes.
            </p>
            <Link
              to="/empresa"
              className="mt-8 inline-block rounded-full bg-sky-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-500"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection
