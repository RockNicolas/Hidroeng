import seedTestimonials from '../data/testimonialsSeed.json'

const STORAGE_KEY = 'hidroeng_testimonials_json'

function normalizeTestimonials(data) {
  if (!Array.isArray(data)) return []
  return data
    .filter((item) => item?.id && item?.name && item?.message && Number.isFinite(Number(item?.rating)))
    .map((item) => ({
      id: String(item.id),
      name: String(item.name),
      role: String(item.role || 'Cliente'),
      message: String(item.message),
      rating: Math.min(5, Math.max(1, Number(item.rating))),
      createdAt: item.createdAt || new Date().toISOString(),
    }))
}

function readRaw() {
  const value = localStorage.getItem(STORAGE_KEY)
  if (value === null) return null

  try {
    return JSON.parse(value)
  } catch {
    return '__invalid_json__'
  }
}

export function getTestimonials() {
  const raw = readRaw()

  // So inicializa com seed quando ainda nao existe nada salvo.
  if (raw === null) {
    const initialData = normalizeTestimonials(seedTestimonials)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
    return initialData
  }

  // Se o JSON salvo estiver corrompido, recupera para seed.
  if (raw === '__invalid_json__') {
    const initialData = normalizeTestimonials(seedTestimonials)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
    return initialData
  }

  // Importante: permite lista vazia apos exclusoes.
  const normalized = normalizeTestimonials(raw)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
  return normalized
}

export function saveTestimonials(items) {
  const normalized = normalizeTestimonials(items)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
  return normalized
}

export function addTestimonial(input) {
  const current = getTestimonials()
  const newItem = {
    id: `t-${Date.now()}`,
    name: input.name.trim(),
    role: input.role.trim() || 'Cliente',
    message: input.message.trim(),
    rating: input.rating,
    createdAt: new Date().toISOString(),
  }
  return saveTestimonials([newItem, ...current])
}

export function removeTestimonial(id) {
  const current = getTestimonials()
  return saveTestimonials(current.filter((item) => item.id !== id))
}
