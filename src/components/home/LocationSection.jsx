function LocationSection() {
  return (
    <section className="-mx-[calc(50dvw-50%)] w-dvw bg-slate-100 py-12 text-slate-800">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6">
        <h3 className="font-display text-center text-5xl uppercase leading-none text-slate-700">Onde estamos</h3>

        <div className="mt-8 overflow-hidden border border-slate-300 bg-white shadow-sm">
          <iframe
            title="Mapa de localizacao Hidroeng"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.351431353223!2d-38.5082726!3d-3.7333597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7485fac84b575%3A0xcfed6d85692efa3a!2sAv.%20Santos%20Dumont%2C%201740%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060150-161!5e0!3m2!1spt-BR!2sbr!4v1778179514153!5m2!1spt-BR!2sbr"
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="border border-t-0 border-slate-300 bg-slate-50 px-4 py-4 text-center text-sm text-slate-600">
          Av. Santos Dumont, 1740 - Aldeota, Fortaleza - CE, 60150-161
        </div>
      </div>
    </section>
  )
}

export default LocationSection
