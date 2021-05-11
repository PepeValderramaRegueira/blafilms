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

export default Input
