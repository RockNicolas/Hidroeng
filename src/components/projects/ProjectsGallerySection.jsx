import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'

function ProjectsGallerySection({ images }) {
  const { ref, isVisible } = useInView({ threshold: 0.2 })
  const projectsToggleRef = useRef(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [allProjectsVisible, setAllProjectsVisible] = useState(false)
  const [renderAllProjects, setRenderAllProjects] = useState(false)

  useEffect(() => {
    if (showAllProjects) {
      setRenderAllProjects(true)
      const frameId = requestAnimationFrame(() => setAllProjectsVisible(true))
      return () => cancelAnimationFrame(frameId)
    }

    setAllProjectsVisible(false)
    const timeoutId = setTimeout(() => setRenderAllProjects(false), 420)
    return () => clearTimeout(timeoutId)
  }, [showAllProjects])

  const featuredProjects = images.slice(0, 3)
  const otherProjects = images.slice(3)

  const handleHideProjects = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setShowAllProjects(false)

    requestAnimationFrame(() => {
      projectsToggleRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    })
  }

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
              <Link
                to={`/empreendimentos/${featuredProjects[0].slug}`}
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
              </Link>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {featuredProjects.slice(1).map((project, index) => (
                <Link
                  key={project.src}
                  to={`/empreendimentos/${project.slug}`}
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
                </Link>
              ))}
            </div>
          </div>

          {otherProjects.length > 0 ? (
            <>
              {!showAllProjects ? (
                <div ref={projectsToggleRef} className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllProjects(true)}
                    className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition hover:text-slate-800"
                  >
                    Ver todos os projetos →
                  </button>
                </div>
              ) : null}

              {renderAllProjects ? (
                <div
                  className={`grid overflow-hidden transition-all duration-400 ease-out sm:grid-cols-2 ${
                    allProjectsVisible ? 'mt-8 max-h-[2200px] gap-4 opacity-100 sm:gap-5' : 'max-h-0 gap-0 opacity-0'
                  }`}
                >
                  {otherProjects.map((project, index) => (
                    <Link
                      key={project.src}
                      to={`/empreendimentos/${project.slug}`}
                      className={`group relative w-full overflow-hidden rounded-2xl text-left shadow-lg transition-all duration-500 ${
                        project.title === 'Casa Vista Imperial' ? 'sm:col-span-2' : ''
                      } ${allProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                      style={{ transitionDelay: `${index * 60}ms` }}
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
                    </Link>
                  ))}
                </div>
              ) : null}

              {showAllProjects ? (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={handleHideProjects}
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
    </>
  )
}

export default ProjectsGallerySection
