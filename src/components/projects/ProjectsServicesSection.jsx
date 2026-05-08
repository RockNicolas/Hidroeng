import { FaClipboardCheck, FaHardHat, FaWater } from 'react-icons/fa'
import useInView from '../../hooks/useInView'

const services = [
  {
    title: 'Projeto e planejamento residencial',
    description:
      'Desenvolvimento técnico completo para casas e condomínios, com definição de etapas, custos e soluções construtivas eficientes.',
    Icon: FaWater,
  },
  {
    title: 'Execução de obras',
    description:
      'Construção de residências e áreas comuns de condomínios com mão de obra especializada, controle de qualidade e segurança em obra.',
    Icon: FaHardHat,
  },
  {
    title: 'Acabamento e entrega',
    description:
      'Finalização com padrão elevado, vistoria técnica e entrega pronta para morar, garantindo conforto e valorização do patrimônio.',
    Icon: FaClipboardCheck,
  },
]

function ProjectsServicesSection() {
  const { ref, isVisible } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-10 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl font-black uppercase text-slate-900 sm:text-3xl">Como construímos casas e condomínios</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <service.Icon className="text-3xl text-sky-700" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsServicesSection
