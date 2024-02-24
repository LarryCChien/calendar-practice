const getDaysData = (currentMonth = new Date(), today) => {
  // 1. 取得當月第一天及最後一天
  const firstDayOfCurrentMonth = new Date(currentMonth)
  firstDayOfCurrentMonth.setDate(1)
  const year = firstDayOfCurrentMonth.getFullYear()
  const month = firstDayOfCurrentMonth.getMonth()
  const lastDay = new Date(year, month + 1, 0)
  // 2. 取得第一天及最後一天是星期幾, ex: 0, 1, 2, 3, 4, 5, 6
  const firstDayWeekDay = firstDayOfCurrentMonth.getDay()
  const lastDayWeekDay = lastDay.getDay()
  // 3. 取得上個月最後幾天至星期日
  const prevMonthLastDays = Array.from(
    { length: firstDayWeekDay },
    (_, i) => new Date(year, month, 0 - i)
  ).reverse()
  // 4. 取得下個月前幾天至星期六
  const nextMonthFirstDays = Array.from(
    { length: 6 - lastDayWeekDay },
    (_, i) => new Date(year, month + 1, i + 1)
  )
  // 5. Combine all days
  return [
    ...prevMonthLastDays,
    ...Array.from({ length: lastDay.getDate() }, (_, i) => {
      const day = new Date(year, month, i + 1)
      day.isCurrentMonth =
        day.getMonth() === today.getMonth() &&
        day.getFullYear() === today.getFullYear()
      day.isToday =
        day.getDate() === today.getDate() &&
        day.getMonth() === today.getMonth() &&
        day.getFullYear() === today.getFullYear()
      return day
    }),
    ...nextMonthFirstDays,
  ]
}

export const getDays = (currentMonth) => {
  const today = new Date()
  today.isCurrentMonth = true
  today.isToday = true

  const days = getDaysData(currentMonth, today)

  return {
    today:
      days.find(
        (day) =>
          day.getDate() === today.getDate() &&
          day.getMonth() === today.getMonth()
      ) || today,
    days,
  }
}
