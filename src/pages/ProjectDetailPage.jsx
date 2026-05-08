import { Navigate, useParams } from 'react-router-dom'
import { FaBath, FaBed, FaCarSide, FaRulerCombined } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import projectsData from '../data/projectsData'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectsData.find((item) => item.slug === slug)

  const { ref: conceptRef, isVisible: conceptVisible } = useInView({ threshold: 0.2 })

  if (!project) return <Navigate to="/empreendimentos" replace />

  return (
    <div className="-mx-[calc(50dvw-50%)] w-dvw bg-white text-slate-800">
      <section className="-mt-[62px] w-full overflow-hidden border-y border-white/20 sm:-mt-[72px]">
        <div className="relative">
          <img src={project.src} alt={project.alt} className="h-[62svh] min-h-[420px] w-full object-cover md:h-[72svh]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{project.type}</p>
            <h1 className="mt-2 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-3 text-sm text-slate-100 sm:text-base">
              {project.year} • {project.location} • {project.area}
            </p>
          </div>
        </div>
      </section>

      <section ref={conceptRef} className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-[1fr_320px]">
        <article
          className={`transition-all duration-1000 ${
            conceptVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-black uppercase text-slate-900">Conceito</h2>
          <p className="mt-5 text-sm leading-loose text-slate-700 sm:text-base">{project.concept}</p>
          <p className="mt-5 text-sm leading-loose text-slate-700 sm:text-base">{project.description}</p>
        </article>

        <aside
          className={`rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all delay-100 duration-1000 ${
            conceptVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h3 className="text-xl font-black uppercase text-slate-900">Ficha técnica</h3>

          <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-700">
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">Localização</span>
              {project.location}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">Área</span>
              {project.area}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">Ano do projeto</span>
              {project.year}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-slate-700">
            <p className="flex items-center gap-2 rounded-md bg-white px-3 py-2">
              <FaBed className="text-sky-700" /> {project.bedrooms}
            </p>
            <p className="flex items-center gap-2 rounded-md bg-white px-3 py-2">
              <FaBath className="text-sky-700" /> {project.bathrooms}
            </p>
            <p className="flex items-center gap-2 rounded-md bg-white px-3 py-2">
              <FaCarSide className="text-sky-700" /> {project.garage}
            </p>
            <p className="flex items-center gap-2 rounded-md bg-white px-3 py-2">
              <FaRulerCombined className="text-sky-700" /> {project.area}
            </p>
          </div>

          <div className="mt-5 rounded-lg border border-orange-200 bg-orange-50 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.14em] text-orange-700">Faixa de investimento</p>
            <p className="mt-1 text-base font-bold text-orange-800">{project.investment}</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default ProjectDetailPage
