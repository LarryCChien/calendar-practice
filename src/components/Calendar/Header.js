'use client'
import PropTypes from 'prop-types'
import MonthButton from './MonthButton'

const Header = ({ currentMonth, onPrevMonth, onNextMonth }) => (
  <div className='flex'>
    <MonthButton text='<' onClick={onPrevMonth} />
    <h1 className='flex-1 text-center leading-[44px]'>{currentMonth}</h1>
    <MonthButton text='>' onClick={onNextMonth} />
  </div>
)

Header.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
}

export default Header
