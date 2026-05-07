import { FaBuilding, FaClipboardCheck, FaHandshake, FaTools } from 'react-icons/fa'
import houseOne from '../assets/casas/Modern-Minimalist-House.png'
import houseTwo from '../assets/casas/Modern-Architectural-Elegance.png'
import buildingImage from '../assets/casas/Twilight Modern House.png'
import HeroBanner from '../components/home/HeroBanner'
import ServicesSection from '../components/home/ServicesSection'
import StatsSection from '../components/home/StatsSection'
import WhoWeAreSection from '../components/home/WhoWeAreSection'
import useInView from '../hooks/useInView'

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
  const { ref: firstHeroRef, isVisible: firstHeroVisible } = useInView({ threshold: 0.2 })

  return (
    <div>
      <section
        ref={firstHeroRef}
        className={`relative -mx-[calc(50dvw-50%)] w-dvw overflow-hidden border-y border-white/20 transition-all duration-1000 ${
          firstHeroVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.62), rgba(2, 6, 23, 0.62)), url(${houseOne})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex h-screen flex-col items-center justify-center px-6 py-8 text-center">
          <h1
            className={`font-display text-4xl font-light uppercase tracking-wide text-white transition-all duration-1000 md:text-7xl ${
              firstHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Construindo Qualidade
          </h1>
          <p
            className={`font-display mt-6 text-xl font-semibold uppercase tracking-[0.35em] text-white/90 transition-all delay-150 duration-1000 md:text-3xl ${
              firstHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Desde 1976
          </p>
          <div
            className={`mt-6 h-[2px] w-44 bg-white/75 transition-all delay-300 duration-1000 md:w-72 ${
              firstHeroVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <p
            className={`font-display mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all delay-500 duration-1000 md:text-2xl ${
              firstHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Construimos sonhos, todos os dias!
          </p>
        </div>
      </section>

      <div className="space-y-16 pt-0">
        <HeroBanner image={houseTwo} title="Projetos de Alto Padrao" subtitle="Design, inovacao e excelencia construtiva" />
        <WhoWeAreSection image={buildingImage} />
        <StatsSection stats={stats} />
        <ServicesSection services={services} />
      </div>
    </div>
  )
}

export default HomePage
