import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'

function WhoWeAreSection({ image }) {
  const { ref, isVisible } = useInView({ threshold: 0.25 })

  return (
    <section ref={ref} className="-mx-[calc(50dvw-50%)] w-dvw overflow-hidden bg-slate-100 py-10 text-slate-800">
      <div className="grid items-stretch md:grid-cols-[2.8fr_1fr]">
        <div
          className={`flex h-[320px] items-center justify-center bg-slate-100 transition-all duration-1000 md:h-[420px] ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <img src={image} alt="Empreendimento moderno Hidroeng" className="h-full w-full object-contain" />
        </div>
        <div
          className={`flex items-center px-8 py-8 transition-all delay-150 duration-1000 md:px-10 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >
          <div>
            <p className="font-display text-5xl uppercase leading-none text-slate-700">Quem somos</p>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              A Hidroeng e uma empresa de engenharia e infraestrutura comprometida com qualidade, seguranca e
              resultados. Atuamos em projetos de diferentes portes, construindo solucoes duraveis e relacoes de
              confianca com nossos clientes.
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
