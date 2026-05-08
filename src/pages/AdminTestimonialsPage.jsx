import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarRatingDisplay from '../components/testimonials/StarRatingDisplay'
import { logoutAdmin } from '../services/adminAuth'
import { getTestimonials, removeTestimonial } from '../services/testimonialsStorage'

function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    setTestimonials(getTestimonials())
  }, [])

  const handleDelete = (id) => {
    setTestimonials(removeTestimonial(id))
  }

  const handleLogout = () => {
    logoutAdmin()
    window.location.href = '/admin/login'
  }

  return (
    <section className="space-y-6 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Admin</p>
          <h1 className="text-3xl font-black uppercase text-slate-900">Gerenciar depoimentos</h1>
        </div>
        <Link
          to="/depoimentos"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Voltar para depoimentos
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
        >
          Sair
        </button>
      </div>

      <div className="space-y-4">
        {testimonials.length === 0 ? (
          <p className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">Nenhum depoimento cadastrado.</p>
        ) : (
          testimonials.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                  <div className="mt-2">
                    <StarRatingDisplay rating={item.rating} />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Apagar comentário
                </button>
              </div>
              <p className="mt-4 text-slate-700">{item.message}</p>
            </article>
          ))
        )}
      </div>
    </section>
  )
}

export default AdminTestimonialsPage
