import { NavLink, Outlet } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo/logo-page-Photoroom.png'
import Footer from './Footer'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/empreendimentos', label: 'Empreendimentos' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/contato', label: 'Contato' },
]

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-gradient-to-b from-[rgba(248,250,252,0.95)] via-[rgba(248,250,252,0.75)] to-[rgba(248,250,252,0.15)] text-slate-800 shadow-sm backdrop-blur-sm">
        <div className="flex w-full items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-3 md:gap-6 md:px-8 lg:px-10">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Hidroeng Infraestrutura"
              className="h-9 w-9 object-contain sm:h-12 sm:w-12"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-700 sm:text-sm">Hidroeng</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-orange-500 sm:text-xs">Infraestrutura</p>
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

      <main className="mx-auto w-full max-w-6xl flex-1 px-3 pb-10 pt-0 sm:px-4">
        <Outlet />
      </main>

      <a
        href="https://wa.me/5585998528528?text=Ola%2C%20quero%20falar%20com%20a%20Hidroeng."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-md transition hover:scale-105 hover:bg-[#20c75a] sm:bottom-5 sm:right-5 sm:h-12 sm:w-12 sm:text-4xl"
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </div>
  )
}

export default SiteLayout
