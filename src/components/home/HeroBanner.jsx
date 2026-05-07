import useInView from '../../hooks/useInView'

function HeroBanner({ image, title, subtitle }) {
  const { ref, isVisible } = useInView({ threshold: 0.25 })

  return (
    <section
      ref={ref}
      className={`relative -mx-[calc(50dvw-50%)] w-dvw overflow-hidden border-y border-white/20 transition-all duration-1000 ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.62), rgba(2, 6, 23, 0.62)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="flex h-[calc(100vh-72px)] flex-col items-center justify-center px-6 py-8 text-center">
        <h2
          className={`font-display text-3xl font-light uppercase tracking-wide text-white transition-all duration-1000 md:text-6xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {title}
        </h2>
        <p
          className={`font-display mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/90 transition-all delay-150 duration-1000 md:text-xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default HeroBanner
