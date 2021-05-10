const Input = ({ placeholder, value, type, name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className='input'
    />
  )
}

export default Input
