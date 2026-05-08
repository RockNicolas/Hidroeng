import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAdmin } from '../services/adminAuth'

function AdminLoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const ok = loginAdmin(username.trim(), password)
    if (!ok) {
      setError('Usuário ou senha inválidos.')
      return
    }
    navigate('/admin/depoimentos', { replace: true })
  }

  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center pt-10">
      <form onSubmit={handleSubmit} className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Admin</p>
        <h1 className="mt-2 text-3xl font-black uppercase text-slate-900">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Entre para gerenciar os depoimentos.</p>

        <div className="mt-5 space-y-4">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
          />
        </div>

        {error ? <p className="mt-3 text-sm font-semibold text-red-600">{error}</p> : null}

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default AdminLoginPage
