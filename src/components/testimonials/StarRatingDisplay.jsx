import { FaStar } from 'react-icons/fa'

function StarRatingDisplay({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar key={star} className={star <= rating ? 'text-amber-400' : 'text-slate-300'} />
      ))}
    </div>
  )
}

export default StarRatingDisplay
