import houseOne from '../assets/casas/Modern-Minimalist-House.png'
import houseTwo from '../assets/casas/Modern-Architectural-Elegance.png'
import buildingImage from '../assets/casas/Twilight Modern House.png'
import houseThree from '../assets/casas/Modern-House-Twilight.png'
import houseFour from '../assets/casas/Modern-Minimalist-Building.png'
import HeroBanner from '../components/home/HeroBanner'
import DevelopmentsHighlightSection from '../components/home/DevelopmentsHighlightSection'
import LocationSection from '../components/home/LocationSection'
import WhoWeAreSection from '../components/home/WhoWeAreSection'
import useInView from '../hooks/useInView'

const developmentsGallery = [
  { src: houseOne, alt: 'Fachada de empreendimento residencial moderno' },
  { src: houseThree, alt: 'Area interna de empreendimento contemporaneo' },
  { src: houseFour, alt: 'Conjunto residencial com design funcional' },
  { src: buildingImage, alt: 'Empreendimento de alto padrao ao entardecer' },
]

function HomePage() {
  const { ref: firstHeroRef, isVisible: firstHeroVisible } = useInView({ threshold: 0.2 })

  return (
    <div>
      <section
        ref={firstHeroRef}
        className={`relative -mt-[62px] -mx-[calc(50dvw-50%)] w-dvw overflow-hidden border-y border-white/20 transition-all duration-1000 sm:-mt-[72px] ${
          firstHeroVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.62), rgba(2, 6, 23, 0.62)), url(${houseOne})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex h-[85svh] min-h-[520px] flex-col items-center justify-center px-4 pb-8 pt-16 text-center sm:px-6 sm:pt-20 md:h-screen">
          <h1
            className={`font-display text-3xl font-light uppercase tracking-wide text-white transition-all duration-1000 sm:text-4xl md:text-7xl ${
              firstHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Construindo Qualidade
          </h1>
          <p
            className={`font-display mt-5 text-base font-semibold uppercase tracking-[0.2em] text-white/90 transition-all delay-150 duration-1000 sm:text-xl sm:tracking-[0.35em] md:text-3xl ${
              firstHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Desde 1976
          </p>
          <div
            className={`mt-6 h-[2px] w-44 bg-white/75 transition-all delay-300 duration-1000 md:w-72 ${
              firstHeroVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <p
            className={`font-display mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all delay-500 duration-1000 sm:text-sm sm:tracking-[0.2em] md:text-2xl ${
              firstHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Construimos sonhos, todos os dias!
          </p>
        </div>
      </section>

      <div className="space-y-16 pt-0">
        <HeroBanner image={houseTwo} title="Projetos de Alto Padrão" subtitle="Design, inovação e excelência construtiva" />
        <WhoWeAreSection image={buildingImage} />
        <DevelopmentsHighlightSection images={developmentsGallery} />
        <LocationSection />
      </div>
    </div>
  )
}

export default HomePage
