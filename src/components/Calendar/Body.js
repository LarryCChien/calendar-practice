import PropTypes from 'prop-types'
import Day from './Day'

const Body = ({ days }) => (
  <div className='flex flex-wrap'>
    {days.map((day) => (
      <Day key={day} day={day} onClick={() => console.log('clicked')} />
    ))}
  </div>
)

Body.propTypes = {
  days: PropTypes.array.isRequired,
}

export default Body
