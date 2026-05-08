import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'

function ProjectsHeroSection({ backgroundImage, sideImage }) {
  const { ref, isVisible } = useInView({ threshold: 0.25 })

  return (
    <section
      ref={ref}
      className="-mx-[calc(50dvw-50%)] -mt-[62px] w-dvw overflow-hidden border-y border-white/20 sm:-mt-[72px]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.82) 0%, rgba(2, 6, 23, 0.72) 45%, rgba(2, 6, 23, 0.6) 100%), url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto grid min-h-[430px] max-w-6xl gap-6 px-4 pb-10 pt-22 sm:px-6 sm:pt-24 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 sm:text-sm">Empreendimentos</p>
          <h1 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Casas e condomínios com alto padrão de execução
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Do projeto ao acabamento, construímos residências e condomínios com foco em conforto, valorização do imóvel,
            cumprimento de prazo e excelência construtiva.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-orange-600"
          >
            Solicitar proposta
          </Link>
        </div>

        <div
          className={`transition-all delay-150 duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <img
            src={sideImage}
            alt="Condomínio residencial executado pela Hidroeng"
            className="h-56 w-full rounded-2xl border border-white/30 object-cover shadow-xl sm:h-72 md:h-80"
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsHeroSection
