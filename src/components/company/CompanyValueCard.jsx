function CompanyValueCard({ title, description, Icon }) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-slate-300 bg-[#f2f4f7] p-5 shadow-[0_6px_16px_rgba(15,23,42,0.18)] sm:p-6">
      {Icon ? (
        <div className="absolute right-4 top-4 text-4xl text-sky-800/80 sm:right-5 sm:top-5">
          <Icon />
        </div>
      ) : null}
      <h3 className="pr-10 text-4xl font-black uppercase leading-none text-slate-900 sm:text-[2.1rem]">{title}</h3>
      <p className="mt-3 text-[1.08rem] leading-relaxed text-slate-700">{description}</p>
    </article>
  )
}

export default CompanyValueCard
