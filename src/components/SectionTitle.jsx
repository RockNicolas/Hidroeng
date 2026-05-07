function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {text ? <p className="mt-3 max-w-3xl text-slate-300">{text}</p> : null}
    </div>
  )
}

export default SectionTitle
