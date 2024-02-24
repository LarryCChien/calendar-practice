import PropTypes from 'prop-types'

const MonthButton = ({ text, onClick }) => (
  <button className='h-11 w-11 bg-white hover:bg-neutral-200' onClick={onClick}>
    {text}
  </button>
)

MonthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MonthButton
