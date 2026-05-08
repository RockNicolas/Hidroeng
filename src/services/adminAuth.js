const AUTH_KEY = 'hidroeng_admin_authenticated'

const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || '123456'

export function isAdminAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export function loginAdmin(username, password) {
  const isValid = username === ADMIN_USERNAME && password === ADMIN_PASSWORD
  if (isValid) localStorage.setItem(AUTH_KEY, 'true')
  return isValid
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY)
}
