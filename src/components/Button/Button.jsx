import propTypes from 'prop-types'

const Button = ({ type = 'submit', label = '', disabled }) => (
  <button type={type} disabled={disabled}>
    {label}
  </button>
)

Button.propTypes = {
  type: propTypes.oneOf(['submit', 'button']),
  label: propTypes.string.isRequired,
  disabled: propTypes.bool
}

export default Button
