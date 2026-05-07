import { NavLink, Outlet } from 'react-router-dom'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo/logo-page-Photoroom.png'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/empreendimentos', label: 'Empreendimentos' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/contato', label: 'Contato' },
]

function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-slate-800 shadow-sm">
        <div className="flex w-full items-center justify-between gap-6 px-4 py-3 md:px-8 lg:px-10">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Hidroeng Infraestrutura"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-sky-700">Hidroeng</p>
              <p className="text-xs uppercase tracking-widest text-orange-500">Infraestrutura</p>
            </div>
          </NavLink>

          <nav className="hidden flex-wrap items-center justify-end gap-2 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-b-2 border-orange-500 text-orange-600'
                      : 'text-slate-600 hover:text-orange-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <nav className="flex w-full overflow-x-auto border-t border-slate-200 px-4 py-2 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mr-2 rounded-full border px-3 py-1 text-xs ${
                  isActive
                    ? 'border-orange-400 bg-orange-100 text-orange-700'
                    : 'border-slate-300 text-slate-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-0">
        <Outlet />
      </main>

      <a
        href="https://wa.me/5585997665652?text=Ola%2C%20quero%20falar%20com%20a%20Hidroeng."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-4xl text-white shadow-md transition hover:scale-105 hover:bg-[#20c75a]"
      >
        <FaWhatsapp />
      </a>

      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>Hidroeng Infraestrutura - Engenharia que constroi o futuro.</p>
          <div className="flex items-center gap-3 text-lg">
            <a href="#" aria-label="Instagram" className="rounded-full bg-slate-800 p-2 hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-slate-800 p-2 hover:text-sky-300">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="WhatsApp" className="rounded-full bg-slate-800 p-2 hover:text-green-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
