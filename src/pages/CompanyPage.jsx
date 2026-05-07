import SectionTitle from '../components/SectionTitle'

function CompanyPage() {
  return (
    <section>
      <SectionTitle
        eyebrow="Sobre a Hidroeng"
        title="Compromisso com engenharia de alta performance"
        text="Somos uma empresa focada em infraestrutura, com equipe multidisciplinar preparada para conduzir projetos de diferentes portes com seguranca, planejamento e excelencia tecnica."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-bold text-sky-300">Missao</h3>
          <p className="mt-3 text-slate-300">
            Entregar obras e solucoes de engenharia com qualidade superior, prazos realistas e relacionamento de
            confianca com cada cliente.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-bold text-sky-300">Visao</h3>
          <p className="mt-3 text-slate-300">
            Ser referencia nacional em infraestrutura inteligente, reconhecida pela inovacao e pelo impacto positivo nas
            cidades e industrias.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-bold text-sky-300">Valores</h3>
          <p className="mt-3 text-slate-300">
            Etica, responsabilidade tecnica, seguranca operacional, transparencia e foco continuo em resultado.
          </p>
        </article>
      </div>
    </section>
  )
}

export default CompanyPage
