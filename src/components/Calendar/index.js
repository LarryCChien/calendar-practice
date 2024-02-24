'use client'
import { useState } from 'react'
import { getDays } from '@/helpers/calendar'
import Header from './Header'
import Body from './Body'

const Calendar = () => {
  const defaultDate = new Date()
  defaultDate.setDate(1)
  const [currentMonth, setCurrentMonth] = useState(defaultDate)
  const [focusedDate, setFocusedDate] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
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
  const handleSelectDate = (date) => {
    if (!startDate || startDate > date || (startDate && endDate)) {
      setStartDate(date)
      setEndDate(null)
      return
    }
    if (startDate <= date) {
      setEndDate(date)
      setFocusedDate(null)
    }
    return
  }
  const handleFocusDate = (date) => {
    if (startDate && !endDate) {
      setFocusedDate(date)
    }
  }
  const currentMonthText = `${currentMonth.getFullYear()}年${currentMonth.getMonth() + 1}月`

  return (
    <>
      <div className='h-60 w-[350px] text-base'>
        <Header
          currentMonth={currentMonthText}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
        <Body
          days={days}
          handleSelectDate={handleSelectDate}
          focusedDate={focusedDate}
          handleFocusDate={handleFocusDate}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      {startDate && (
        <div>
          {`${startDate.getFullYear()}年${startDate.getMonth() + 1}月${startDate.getDate()}日`}{' '}
          ~
          {endDate &&
            `${endDate.getFullYear()}年${endDate.getMonth() + 1}月${endDate.getDate()}日`}
        </div>
      )}
    </>
  )
}

export default Calendar
