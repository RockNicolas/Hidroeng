import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaClipboardCheck, FaHandshake, FaTools } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import houseOne from '../assets/casas/Modern-Minimalist-House.png'
import houseTwo from '../assets/casas/Modern-Architectural-Elegance.png'

const stats = [
  { value: '15+', label: 'Anos de experiencia' },
  { value: '120+', label: 'Projetos concluidos' },
  { value: '98%', label: 'Clientes satisfeitos' },
]

const services = [
  {
    icon: FaBuilding,
    title: 'Obras de infraestrutura',
    text: 'Execucao de projetos urbanos e industriais com foco em seguranca e produtividade.',
  },
  {
    icon: FaTools,
    title: 'Planejamento tecnico',
    text: 'Cronogramas detalhados, controle de custo e acompanhamento tecnico especializado.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Gestao de qualidade',
    text: 'Processos padronizados e verificacoes constantes para garantir excelencia na entrega.',
  },
  {
    icon: FaHandshake,
    title: 'Parceria com o cliente',
    text: 'Atendimento proximo e transparente em cada etapa da obra.',
  },
]

function HomePage() {
  const [showSecondHero, setShowSecondHero] = useState(false)
  const secondHeroRef = useRef(null)

  useEffect(() => {
    const element = secondHeroRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSecondHero(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <section
        className="relative -mx-[calc(50dvw-50%)] w-dvw overflow-hidden border-y border-white/20"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.62), rgba(2, 6, 23, 0.62)), url(${houseOne})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 py-12 text-center">
          <h1 className="font-display text-4xl font-light uppercase tracking-wide text-white md:text-7xl">
            Construindo Qualidade
          </h1>
          <p className="font-display mt-6 text-xl font-semibold uppercase tracking-[0.35em] text-white/90 md:text-3xl">
            Desde 1976
          </p>
          <div className="mt-6 h-[2px] w-44 bg-white/75 md:w-72" />
          <p className="font-display mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white md:text-2xl">
            Construimos sonhos, todos os dias!
          </p>
        </div>
      </section>

      <div className="space-y-16 pt-0">
        <section
          ref={secondHeroRef}
          className={`relative -mx-[calc(50dvw-50%)] w-dvw overflow-hidden border-y border-white/20 transition-opacity duration-1000 ${
            showSecondHero ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.62), rgba(2, 6, 23, 0.62)), url(${houseTwo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 py-12 text-center">
            <h2 className="font-display text-3xl font-light uppercase tracking-wide text-white md:text-6xl">
              Projetos de Alto Padrao
            </h2>
            <p className="font-display mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/90 md:text-xl">
              Design, inovacao e excelencia construtiva
            </p>
          </div>
        </section>

        <section>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-4xl font-bold text-sky-300">{item.value}</p>
                <p className="mt-2 text-slate-300">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            eyebrow="Nossos servicos"
            title="Atuacao completa para o seu empreendimento"
            text="Unimos engenharia, gestao e execucao em um unico parceiro para acelerar resultados."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <Icon className="text-3xl text-orange-400" />
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
