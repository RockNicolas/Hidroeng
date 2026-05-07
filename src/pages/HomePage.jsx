import { Link } from 'react-router-dom'
import { FaBuilding, FaClipboardCheck, FaHandshake, FaTools } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'

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
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-sky-400/25 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-12 md:px-10">
        <p className="inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1 text-xs uppercase tracking-wider text-orange-300">
          Engenharia que constroi o futuro
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black text-white md:text-6xl">
          Solucoes em engenharia e infraestrutura para projetos de alto impacto
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          A Hidroeng transforma desafios tecnicos em resultados concretos com tecnologia, experiencia e compromisso
          com a qualidade.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contato" className="rounded-lg bg-sky-500 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-400">
            Solicitar proposta
          </Link>
          <Link
            to="/portfolio"
            className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-100 hover:border-orange-400 hover:text-orange-300"
          >
            Ver portfolio
          </Link>
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
  )
}

export default HomePage
