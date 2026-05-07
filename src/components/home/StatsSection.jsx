function StatsSection({ stats }) {
  return (
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
  )
}

export default StatsSection
