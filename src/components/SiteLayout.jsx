import { NavLink, Outlet } from 'react-router-dom'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo-hidroeng.png'

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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-sky-400/20 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Hidroeng Infraestrutura"
              className="h-12 w-12 rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-sky-300">Hidroeng</p>
              <p className="text-xs uppercase tracking-widest text-orange-400">Infraestrutura</p>
            </div>
          </NavLink>

          <nav className="hidden gap-2 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-200'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <nav className="mx-auto flex max-w-6xl overflow-x-auto px-4 pb-3 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mr-2 rounded-full border px-3 py-1 text-xs ${
                  isActive
                    ? 'border-sky-300 bg-sky-500/20 text-sky-100'
                    : 'border-slate-700 text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <Outlet />
      </main>

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
