import CompanyValueCard from './CompanyValueCard'
import { FaBuilding, FaBullseye, FaHardHat } from 'react-icons/fa'
import useInView from '../../hooks/useInView'

const valueCards = [
  {
    title: 'Missão',
    Icon: FaBullseye,
    description:
      'Construir casas e condomínios com qualidade, inovação e compromisso com cada família, garantindo obras seguras, funcionais e duradouras.',
  },
  {
    title: 'Política',
    Icon: FaHardHat,
    description:
      'Executar cada empreendimento residencial com planejamento, transparência e melhoria contínua, atendendo rigorosamente aos requisitos técnicos e legais.',
  },
  {
    title: 'Visão',
    Icon: FaBuilding,
    description:
      'Ser referência no Ceará em construção de casas e condomínios, reconhecida pela excelência técnica, confiança e valorização do patrimônio dos clientes.',
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
