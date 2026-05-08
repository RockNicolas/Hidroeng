import { useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import StarRatingDisplay from '../components/testimonials/StarRatingDisplay'
import StarRatingInput from '../components/testimonials/StarRatingInput'
import { addTestimonial, getTestimonials } from '../services/testimonialsStorage'
import backgroundImage from '../assets/depoimento/Luxurious Coastal House with Infinity Pool.png'
import useInView from '../hooks/useInView'

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([])
  const { ref: titleRef, isVisible: titleVisible } = useInView({ threshold: 0.25 })
  const { ref, isVisible } = useInView({ threshold: 0.15 })
  const [form, setForm] = useState({
    name: '',
    projectName: '',
    rating: 5,
    message: '',
  })

  useEffect(() => {
    setTestimonials(getTestimonials())
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    const updated = addTestimonial({
      name: form.name,
      role: form.projectName,
      rating: form.rating,
      message: form.message,
    })
    setTestimonials(updated)
    setForm({ name: '', projectName: '', rating: 5, message: '' })
  }

  return (
    <div className="-mx-[calc(50dvw-50%)] w-dvw bg-slate-100 pb-12">
      <section
        ref={titleRef}
        className="relative w-full overflow-hidden border-y border-white/20"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.72)] via-[rgba(15,23,42,0.52)] to-[rgba(15,23,42,0.2)]" />

        <div
          className={`relative mx-auto max-w-6xl px-4 pb-10 pt-8 transition-all duration-900 sm:px-6 sm:pb-12 sm:pt-10 ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Depoimentos</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-white drop-shadow-[0_2px_10px_rgba(15,23,42,0.35)] sm:text-4xl md:text-5xl">
              A confiança de quem já construiu com a Hidroeng
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-100 sm:text-base">
              Compartilhe sua experiência e ajude outras famílias a conhecer nosso trabalho.
            </p>
          </div>
        </div>
      </section>

      <div ref={ref} className="mx-auto mt-6 w-full max-w-6xl space-y-6 px-4 sm:px-6">
        <section className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <FaQuoteLeft className="text-2xl text-sky-700" />
              <p className="mt-4 text-slate-700">{item.message}</p>
              <div className="mt-5">
                <StarRatingDisplay rating={item.rating} />
              </div>
              <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role || 'Empreendimento não informado'}</p>
            </article>
          ))}
        </section>

        <section
          className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-700 sm:p-6 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-black uppercase text-slate-900">Deixe seu depoimento</h2>
          <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
            />
            <input
              type="text"
              placeholder="Nome do empreendimento (opcional)"
              value={form.projectName}
              onChange={(event) => setForm((prev) => ({ ...prev, projectName: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
            />

            <div className="sm:col-span-2">
              <p className="mb-2 text-sm font-semibold text-slate-700">Sua avaliação</p>
              <StarRatingInput value={form.rating} onChange={(rating) => setForm((prev) => ({ ...prev, rating }))} />
            </div>

            <textarea
              rows="4"
              placeholder="Escreva aqui sua experiência com a Hidroeng..."
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white sm:col-span-2"
            />

            <button
              type="submit"
              className="sm:col-span-2 w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
            >
              Publicar depoimento
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default TestimonialsPage
