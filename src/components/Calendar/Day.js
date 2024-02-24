import PropTypes from 'prop-types'
import classNames from 'classnames'

const Day = ({ day, onClick }) => {
  const { isCurrentMonth = false, isToday = false } = day

  return (
    <button
      className={classNames('basis-1/7 h-9 shrink grow border-none', {
        'text-black': isCurrentMonth,
        'text-calendar-secondary-color': !isCurrentMonth,
        'bg-white': !isToday,
        'bg-calendar-highlight-color': isToday,
        'hover:bg-neutral-200 active:bg-calendar-active-color active:text-white':
          isCurrentMonth && !isToday,
      })}
      onClick={onClick}
    >
      {`${day.getDate()}日`}
    </button>
  )
}

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Day
