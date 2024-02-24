import PropTypes from 'prop-types'
import classNames from 'classnames'

const Day = ({
  day,
  onClick,
  focusedDate,
  handleFocusDate,
  startDate,
  endDate,
}) => {
  const { isCurrentMonth = false, isToday = false } = day

  const handleClick = () => onClick(day)
  return (
    <button
      className={classNames('basis-1/7 h-9 shrink grow border-none', {
        'text-black': isCurrentMonth,
        'text-calendar-secondary-color': !isCurrentMonth,
        'bg-calendar-highlight-color': isToday,
        'active:bg-calendar-active-color active:text-white':
          isCurrentMonth && !isToday,
        'bg-white': !isToday && !(focusedDate >= day && startDate <= day),
        'bg-calendar-active-color text-white':
          !isToday &&
          ((focusedDate >= day && startDate <= day) ||
            (startDate <= day && endDate >= day) ||
            startDate === day),
        'hover:bg-neutral-200': isCurrentMonth && !isToday,
      })}
      onClick={handleClick}
      onMouseOver={() => handleFocusDate(day)}
    >
      {`${day.getDate()}日`}
    </button>
  )
}

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired,
  focusedDate: PropTypes.instanceOf(Date),
  handleFocusDate: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
}

export default Day
