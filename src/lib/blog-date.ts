const MONTHS: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
  July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
}

// blogPosts.ts dates come in three shapes: "24 August 2026", "August 24, 2026"
// and "July 2026". Normalise all of them to ISO YYYY-MM-DD.
export function blogDateToIso(date: string): string {
  const parts = date.replace(/,/g, ' ').trim().split(/\s+/)
  let day = '01', month: string, year: string
  if (parts.length === 3) {
    const monthFirst = parts[0] in MONTHS
    day = (monthFirst ? parts[1] : parts[0]).padStart(2, '0')
    month = monthFirst ? parts[0] : parts[1]
    year = parts[2]
  } else {
    [month, year] = parts
  }
  return `${year}-${MONTHS[month] ?? '01'}-${day}`
}
