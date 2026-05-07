import { FaQuoteLeft } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'

const testimonials = [
  {
    name: 'Marcos Vinicius',
    role: 'Diretor de Operacoes',
    text: 'A Hidroeng entregou nossa obra com excelente organizacao, comunicacao clara e padrao tecnico impecavel.',
  },
  {
    name: 'Carla Menezes',
    role: 'Gestora de Projetos Publicos',
    text: 'Equipe altamente profissional. O cronograma foi respeitado e o resultado final superou as expectativas.',
  },
  {
    name: 'Renato Alves',
    role: 'Gerente Industrial',
    text: 'A parceria trouxe seguranca para a execucao e reduziu riscos durante toda a implantacao.',
  },
]

function TestimonialsPage() {
  return (
    <section>
      <SectionTitle
        eyebrow="Depoimentos"
        title="A confianca de quem ja trabalhou conosco"
        text="Resultados consistentes geram relacoes duradouras. Confira relatos de clientes e parceiros."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FaQuoteLeft className="text-2xl text-sky-300" />
            <p className="mt-4 text-slate-200">{item.text}</p>
            <p className="mt-6 font-semibold text-white">{item.name}</p>
            <p className="text-sm text-orange-300">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsPage
