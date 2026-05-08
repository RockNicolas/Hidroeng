import { useEffect, useState } from 'react'
import { FaBath, FaBed, FaCarSide, FaRulerCombined, FaTimes } from 'react-icons/fa'
import useInView from '../../hooks/useInView'

function ProjectsGallerySection({ images }) {
  const { ref, isVisible } = useInView({ threshold: 0.2 })
  const [selectedInvestment, setSelectedInvestment] = useState(null)
  const [isPortraitImage, setIsPortraitImage] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') setSelectedInvestment(null)
    }

    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  useEffect(() => {
    if (!selectedInvestment) {
      setIsPortraitImage(false)
      return
    }

    const image = new Image()
    image.src = selectedInvestment.src
    image.onload = () => setIsPortraitImage(image.naturalHeight > image.naturalWidth)
  }, [selectedInvestment])

  const featuredProjects = images.slice(0, 3)
  const otherProjects = images.slice(3)

  return (
    <>
      <section ref={ref} className="-mx-[calc(50dvw-50%)] w-dvw bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="text-2xl font-black uppercase text-slate-900 sm:text-3xl">Galeria de empreendimentos</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Casas e condomínios que refletem nosso padrão de qualidade.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {featuredProjects[0] ? (
              <button
                type="button"
                onClick={() => setSelectedInvestment(featuredProjects[0])}
                className={`group relative w-full overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <img src={featuredProjects[0].src} alt={featuredProjects[0].alt} className="h-56 w-full object-cover sm:h-72" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-sky-300">
                    {featuredProjects[0].type}
                  </p>
                  <h3 className="mt-1 text-2xl font-black uppercase sm:text-3xl">{featuredProjects[0].title}</h3>
                  <p className="mt-2 text-xs text-slate-100 sm:text-sm">
                    {featuredProjects[0].year} • {featuredProjects[0].location} • {featuredProjects[0].area}
                  </p>
                </div>
              </button>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {featuredProjects.slice(1).map((project, index) => (
                <button
                  key={project.src}
                  type="button"
                  onClick={() => setSelectedInvestment(project)}
                  className={`group relative w-full overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 120}ms` }}
                >
                  <img src={project.src} alt={project.alt} className="h-56 w-full object-cover sm:h-72" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-900/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sky-300">{project.type}</p>
                    <h3 className="mt-1 text-xl font-black uppercase sm:text-2xl">{project.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-100 sm:text-sm">
                      {project.year} • {project.location} • {project.area}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {otherProjects.length > 0 ? (
            <>
              {!showAllProjects ? (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllProjects(true)}
                    className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition hover:text-slate-800"
                  >
                    Ver todos os projetos →
                  </button>
                </div>
              ) : null}

              <div
                className={`grid overflow-hidden transition-all duration-700 ease-out sm:grid-cols-2 ${
                  showAllProjects ? 'mt-8 max-h-[2800px] gap-4 opacity-100 sm:gap-5' : 'max-h-0 gap-0 opacity-0'
                }`}
              >
                {otherProjects.map((project, index) => (
                  <button
                    key={project.src}
                    type="button"
                    onClick={() => setSelectedInvestment(project)}
                    className={`group relative w-full overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-700 ${
                      project.title === 'Casa Vista Imperial' ? 'sm:col-span-2' : ''
                    } ${
                      showAllProjects ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: showAllProjects ? `${index * 130}ms` : '0ms' }}
                  >
                    <img
                      src={project.src}
                      alt={project.alt}
                      className={`w-full object-cover ${
                        project.title === 'Casa Vista Imperial' ? 'h-64 sm:h-80' : 'h-56 sm:h-72'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-900/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sky-300">{project.type}</p>
                      <h3 className="mt-1 text-xl font-black uppercase sm:text-2xl">{project.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-100 sm:text-sm">
                        {project.year} • {project.location} • {project.area}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {showAllProjects ? (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllProjects(false)}
                    className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition hover:text-slate-800"
                  >
                    Ocultar projetos ↑
                  </button>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </section>

      {selectedInvestment ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 px-4 py-6"
          onClick={() => setSelectedInvestment(null)}
        >
          <article
            className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl ${
              isPortraitImage ? 'max-w-2xl' : 'max-w-3xl'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedInvestment(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-slate-900/70 p-2 text-white transition hover:bg-slate-900"
              aria-label="Fechar detalhes do empreendimento"
            >
              <FaTimes />
            </button>

            <div className={`grid ${isPortraitImage ? 'md:grid-cols-[0.82fr_1.18fr]' : 'md:grid-cols-[1fr_1.05fr]'}`}>
              <img
                src={selectedInvestment.src}
                alt={selectedInvestment.alt}
                className={`w-full object-cover ${isPortraitImage ? 'h-48 md:h-full' : 'h-56 md:h-full'}`}
              />
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{selectedInvestment.type}</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">{selectedInvestment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{selectedInvestment.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <p className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <FaRulerCombined className="text-sky-700" /> {selectedInvestment.area}
                  </p>
                  <p className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <FaBed className="text-sky-700" /> {selectedInvestment.bedrooms}
                  </p>
                  <p className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <FaBath className="text-sky-700" /> {selectedInvestment.bathrooms}
                  </p>
                  <p className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <FaCarSide className="text-sky-700" /> {selectedInvestment.garage}
                  </p>
                </div>

                <div className="mt-5 rounded-lg border border-orange-200 bg-orange-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-orange-700">Faixa de investimento</p>
                  <p className="mt-1 text-lg font-bold text-orange-800">{selectedInvestment.investment}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </>
  )
}

export default ProjectsGallerySection
