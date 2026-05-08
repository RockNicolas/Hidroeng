import { FaStar } from 'react-icons/fa'

function StarRatingInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className={`text-2xl transition ${value >= star ? 'text-amber-400' : 'text-slate-300 hover:text-amber-300'}`}
          aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
        >
          <FaStar />
        </button>
      ))}
      <span className="ml-2 text-sm font-semibold text-slate-600">{value}/5</span>
    </div>
  )
}

export default StarRatingInput
