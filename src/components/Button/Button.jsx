const Button = ({ type = 'submit', label = '', disabled }) => (
  <button type={type} disabled={disabled}>
    {label}
  </button>
)

export default Button
