import CompanyValueCard from './CompanyValueCard'
import { FaBuilding, FaBullseye, FaHardHat } from 'react-icons/fa'
import useInView from '../../hooks/useInView'

const valueCards = [
  {
    title: 'Missão',
    Icon: FaBullseye,
    description:
      'Construir com qualidade e novas tecnologias, proporcionando o crescimento da empresa, atendendo as necessidades dos clientes e colaboradores, contribuindo para o bem-estar da sociedade.',
  },
  {
    title: 'Política',
    Icon: FaHardHat,
    description:
      'Desenvolver produtos e serviços que satisfaçam aos clientes, atendendo aos requisitos aplicáveis, a partir de melhoria contínua com o envolvimento de todos.',
  },
  {
    title: 'Visão',
    Icon: FaBuilding,
    description:
      'Ajudar no desenvolvimento do estado do Ceará, levando obras de relevância para toda a população cearense e gerando empreendimentos surpreendentes.',
  },
]

function CompanyValuesSection() {
  const { ref, isVisible } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="-mt-12 px-1 pb-2 sm:-mt-16 sm:px-2">
      <div className="grid gap-4 md:grid-cols-3">
        {valueCards.map((card, index) => (
          <div
            key={card.title}
            className={`h-full transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 140}ms` }}
          >
            <CompanyValueCard title={card.title} description={card.description} Icon={card.Icon} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CompanyValuesSection
