// Shared Black Friday date helpers (used by the client Countdown and the server-rendered page).

// Black Friday = the day after the 4th Thursday of November.
function blackFridayFor(year: number) {
  const nov1 = new Date(year, 10, 1)
  const firstThursday = 1 + ((4 - nov1.getDay() + 7) % 7)
  return new Date(year, 10, firstThursday + 21 + 1)
}

export function nextBlackFriday(now: Date) {
  const thisYear = blackFridayFor(now.getFullYear())
  // Keep counting to this year's date until Cyber Monday has passed.
  const cyberMondayEnd = new Date(thisYear.getTime() + 4 * 86400000)
  return now < cyberMondayEnd ? thisYear : blackFridayFor(now.getFullYear() + 1)
}

// "only 5 weeks left" / "only 1 week left" / "only 3 days left" / "Black Friday is tomorrow" / "sale week is here".
export function timeLeftLabel(now: Date) {
  const days = Math.floor((nextBlackFriday(now).getTime() - now.getTime()) / 86400000)
  if (days < 0) return 'sale week is here'
  const weeks = Math.floor(days / 7)
  if (weeks >= 2) return `only ${weeks} weeks left`
  if (weeks === 1) return 'only 1 week left'
  if (days === 0) return 'Black Friday is tomorrow'
  return days === 1 ? 'only 1 day left' : `only ${days} days left`
}
