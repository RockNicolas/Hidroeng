import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'

function ContactPage() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div>
        <SectionTitle
          eyebrow="Contato"
          title="Fale com a equipe Hidroeng"
          text="Estamos prontos para entender a necessidade do seu projeto e montar uma proposta personalizada."
        />
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-300" />
              (31) 99999-9999
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-sky-300" />
              contato@hidroeng.com.br
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-slate-300">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-sky-300" />
              Belo Horizonte - MG, Brasil
            </p>
          </div>
        </div>
      </div>

      <form className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-2xl font-bold text-white">Solicite um retorno</h3>
        <div className="mt-5 space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
          <textarea
            rows="5"
            placeholder="Conte um pouco sobre seu projeto"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
          <button type="button" className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-slate-950 hover:bg-orange-400">
            Enviar mensagem
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactPage
