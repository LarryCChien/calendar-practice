'use client'
import { useState } from 'react'
import { getDays } from '@/helpers/calendar'
import Header from './Header'
import Body from './Body'

const Calendar = () => {
  const defaultDate = new Date()
  defaultDate.setDate(1)
  const [currentMonth, setCurrentMonth] = useState(defaultDate)
  const { days } = getDays(currentMonth)

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth)
    prevMonth.setMonth(prevMonth.getMonth() - 1)
    setCurrentMonth(prevMonth)
  }
  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    setCurrentMonth(nextMonth)
  }
  const currentMonthText = `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`

  return (
    <div className='h-60 w-[350px] text-base'>
      <Header
        currentMonth={currentMonthText}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <Body days={days} />
    </div>
  )
}

export default Calendar
