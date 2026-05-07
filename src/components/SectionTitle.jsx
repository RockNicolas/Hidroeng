function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">{title}</h2>
      {text ? <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">{text}</p> : null}
    </div>
  )
}

export default SectionTitle
