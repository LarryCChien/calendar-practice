import PropTypes from 'prop-types'
import Day from './Day'

const Body = ({
  days,
  handleSelectDate,
  focusedDate,
  handleFocusDate,
  startDate,
  endDate,
}) => (
  <div className='flex flex-wrap'>
    {days.map((day) => (
      <Day
        key={day}
        day={day}
        onClick={handleSelectDate}
        focusedDate={focusedDate}
        handleFocusDate={handleFocusDate}
        startDate={startDate}
        endDate={endDate}
      />
    ))}
  </div>
)

Body.propTypes = {
  days: PropTypes.array.isRequired,
  handleSelectDate: PropTypes.func.isRequired,
  focusedDate: PropTypes.instanceOf(Date),
  handleFocusDate: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
}

export default Body
