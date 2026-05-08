import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const contactItems = [
  { label: 'Telefone', value: '+55 85 99852-8528', Icon: FaPhoneAlt },
  { label: 'E-mail', value: 'contato@hidroeng.com', Icon: FaEnvelope },
  { label: 'Localização', value: 'Fortaleza, CE - Brasil', Icon: FaMapMarkerAlt },
  {
    label: 'Horário de atendimento',
    value: 'Segunda a sexta, 8h às 18h',
    secondaryValue: 'Sábado, 9h às 13h',
    Icon: FaClock,
  },
]

function ContactInfoCard({ isVisible }) {
  return (
    <div
      className={`space-y-4 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-xl font-black uppercase text-slate-900 sm:text-2xl">Informações de contato</h2>

        <div className="mt-5 space-y-4">
          {contactItems.map(({ label, value, secondaryValue, Icon }) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <div className="mt-2 text-base font-semibold text-slate-800">
                <p className="flex items-center gap-3">
                  <Icon className="text-sky-700" /> {value}
                </p>
                {secondaryValue ? <p className="pl-8">{secondaryValue}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default ContactInfoCard
