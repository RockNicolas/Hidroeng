import { FaEnvelope, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="mt-12 border-t border-sky-900/50 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold tracking-wide text-sky-700">HIDROENG</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Infraestrutura</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Soluções em engenharia e infraestrutura com foco em qualidade, segurança e desempenho em cada entrega.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="/">Inicio</a></li>
              <li><a href="/empresa">Empresa</a></li>
              <li><a href="/empreendimentos">Empreendimentos</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Recursos</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="/portfolio">Projetos</a></li>
              <li><a href="/depoimentos">Depoimentos</a></li>
              <li><a href="/contato">Atendimento</a></li>
              <li><a href="/empresa">Politica de Qualidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Fale Conosco</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-0.5 shrink-0 text-orange-400" /> Fortaleza, CE - Brasil</li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-orange-400" /> +55 85 99766-5652</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-orange-400" /> contato@hidroeng.com</li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-base">
              <a href="#" aria-label="LinkedIn" className="rounded-full bg-white p-2 text-slate-900 hover:text-orange-500"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/duo.construtora/" aria-label="Instagram" className="rounded-full bg-white p-2 text-slate-900 hover:text-orange-500"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-900/40 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 text-xs text-slate-400">
          <p className="text-center text-sm text-slate-300">© 2026 Hidroeng Infraestrutura. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/empresa">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
