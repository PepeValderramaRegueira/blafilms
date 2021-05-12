import propTypes from 'prop-types'

const Input = ({
  placeholder,
  value,
  type,
  name,
  onChange,
  disabled = false
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
      className='input'
    />
  )
}

Input.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  type: propTypes.oneOf(['text']),
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.bool
}

export default Input
