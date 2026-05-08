function ContactFormCard({ isVisible }) {
  return (
    <form
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all delay-100 duration-700 sm:p-6 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <h2 className="text-2xl font-black uppercase text-slate-900 sm:text-3xl">Solicite um retorno</h2>
      <p className="mt-2 text-sm text-slate-600">Preencha seus dados para nossa equipe entrar em contato.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
        />
        <input
          type="text"
          placeholder="Telefone"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white sm:col-span-2"
        />
        <textarea
          rows="6"
          placeholder="Conte um pouco sobre seu projeto (tipo de obra, metragem, prazo, localização...)"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white sm:col-span-2"
        />
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
      >
        Enviar mensagem
      </button>
    </form>
  )
}

export default ContactFormCard
