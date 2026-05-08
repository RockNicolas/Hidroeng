import ContactFormCard from '../components/contact/ContactFormCard'
import ContactHeroSection from '../components/contact/ContactHeroSection'
import ContactInfoCard from '../components/contact/ContactInfoCard'
import useInView from '../hooks/useInView'

function ContactPage() {
  const { ref, isVisible } = useInView({ threshold: 0.2 })

  return (
    <div className="-mx-[calc(50dvw-50%)] w-dvw bg-slate-100 pb-12">
      <ContactHeroSection />

      <section ref={ref} className="mx-auto -mt-8 grid w-full max-w-6xl gap-6 px-4 sm:-mt-10 sm:px-6 md:grid-cols-[0.95fr_1.05fr]">
        <ContactInfoCard isVisible={isVisible} />
        <ContactFormCard isVisible={isVisible} />
      </section>
    </div>
  )
}

export default ContactPage
