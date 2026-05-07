import SectionTitle from '../components/SectionTitle'

const projectTypes = [
  'Sistemas de drenagem urbana',
  'Infraestrutura de saneamento',
  'Pavimentacao e urbanizacao',
  'Execucao de redes hidraulicas industriais',
  'Recuperacao estrutural e modernizacao',
]

function ProjectsPage() {
  return (
    <section>
      <SectionTitle
        eyebrow="Empreendimentos"
        title="Projetos planejados para durabilidade e eficiencia"
        text="A Hidroeng atua em todas as fases do empreendimento, da analise tecnica inicial ate a entrega final."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projectTypes.map((item) => (
          <article key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">{item}</h3>
            <p className="mt-2 text-slate-300">
              Solucoes desenvolvidas sob medida, com metodologia de execucao controlada e equipe especializada.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
