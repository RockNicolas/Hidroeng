import teamImage from '../../assets/empresa/EQUIPE.png'
import backgroundImage from '../../assets/empresa/Aerial View of Residential Area at Dawn_Dusk.png'
import useInView from '../../hooks/useInView'

const backgroundStyle = {
  backgroundImage:
    `linear-gradient(90deg, rgba(241,245,249,0.84) 0%, rgba(241,245,249,0.76) 45%, rgba(241,245,249,0.52) 100%), url("${backgroundImage}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

function CompanyHeroSection() {
  const { ref, isVisible } = useInView({ threshold: 0.25 })

  return (
    <section ref={ref} className="relative w-full overflow-hidden border-y border-slate-200/80" style={backgroundStyle}>
      <div className="absolute inset-0 opacity-25">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(2,132,199,0.2),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-6 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-8 md:px-8">
        <div
          className={`transition-all duration-900 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <h1 className="text-3xl font-black uppercase leading-tight text-slate-900 sm:text-4xl">
            Nossa tradição e inovação
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            A HIDROENG INFRAESTRUTURA é uma empresa cearense consolidada no ramo da engenharia civil, com vasta experiência 
            na condução de projetos de saneamento e grandes obras na cidade de Fortaleza e região.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Comprometida com a excelência técnica, a Hidroeng atua há décadas no mercado, 
            transformando desafios em soluções eficientes e sustentáveis para a sociedade.
          </p>

          <button
            type="button"
            className="mt-5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-600"
          >
            Solicitar orçamento
          </button>
        </div>

        <div
          className={`justify-self-center transition-all delay-150 duration-900 md:justify-self-end ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <img
            src={teamImage}
            alt="Equipe Hidroeng em reuniao de planejamento"
            className="h-56 w-full max-w-md rounded-2xl border border-white/80 object-cover shadow-lg sm:h-64 md:h-72"
          />
        </div>
      </div>
    </section>
  )
}

export default CompanyHeroSection
