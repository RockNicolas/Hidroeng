import backgroundImage from '../../assets/contato/pexels-alef-morais-336305364-35361412.jpg'

function ContactHeroSection() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/20"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 6, 23, 0.86) 0%, rgba(2, 6, 23, 0.74) 48%, rgba(2, 6, 23, 0.62) 100%), url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 md:pt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Contato Hidroeng</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl">
          Fale com nossa equipe e tire seu projeto do papel
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base">
          Atendemos projetos residenciais e condomínios com planejamento técnico, transparência e acompanhamento completo
          da obra. Envie seus dados e retornamos rapidamente.
        </p>
      </div>
    </section>
  )
}

export default ContactHeroSection
