import SectionTitle from '../components/SectionTitle'

const portfolioItems = [
  { title: 'Complexo industrial Norte', status: 'Entregue em 2025', location: 'Belo Horizonte - MG' },
  { title: 'Corredor logistico Vale Sul', status: 'Entregue em 2024', location: 'Campinas - SP' },
  { title: 'Parque de infraestrutura urbana Delta', status: 'Entregue em 2023', location: 'Curitiba - PR' },
  { title: 'Sistema de drenagem Central', status: 'Entregue em 2022', location: 'Goiania - GO' },
]

function PortfolioPage() {
  return (
    <section>
      <SectionTitle
        eyebrow="Portfolio"
        title="Obras entregues com excelencia"
        text="Conheca alguns projetos que representam a capacidade tecnica e o padrao de qualidade da Hidroeng."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioItems.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-400">{item.status}</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.location}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PortfolioPage
