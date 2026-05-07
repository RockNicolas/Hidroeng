import SectionTitle from '../SectionTitle'

function ServicesSection({ services }) {
  return (
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
  )
}

export default ServicesSection
