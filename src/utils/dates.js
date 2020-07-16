export function getYearsFromDate(d) {
  const today = new Date()
  const originalDate = new Date(d)

  let age = today.getFullYear() - originalDate.getFullYear()
  const m = today.getMonth() - originalDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < originalDate.getDate())) {
    age = age - 1
  }

  return age
}
