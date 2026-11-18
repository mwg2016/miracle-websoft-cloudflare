// Trustpilot-style rating: a row of square tiles, each with a white star.
// Filled tiles take a colour based on the overall score; partial tiles are
// filled proportionally (e.g. 4.7 → the 5th tile is 70% filled).

const COLOURS = {
  5: '#1F5C43', // forest — matches --forest
  4: '#3D8B5E',
  3: '#C9A227',
  2: '#E07A25',
  1: '#C0392B',
} as const

function colourFor(rating: number) {
  const k = Math.min(5, Math.max(1, Math.round(rating))) as keyof typeof COLOURS
  return COLOURS[k]
}

export default function StarTiles({ rating, size = 22, label }: { rating: number; size?: number; label?: string }) {
  const colour = colourFor(rating)
  const gap = Math.max(2, Math.round(size / 10))
  return (
    <span
      role="img"
      aria-label={label ?? `Rated ${rating} out of 5 stars`}
      style={{ display: 'inline-flex', gap }}
    >
      {[0, 1, 2, 3, 4].map(i => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              width: size,
              height: size,
              borderRadius: Math.max(2, size / 9),
              background: fill > 0
                ? `linear-gradient(90deg, ${colour} ${fill * 100}%, #DCD6CA ${fill * 100}%)`
                : '#DCD6CA',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.4l-6.1 3.5 1.5-6.8-5.2-4.6 6.9-.7z" />
            </svg>
          </span>
        )
      })}
    </span>
  )
}
