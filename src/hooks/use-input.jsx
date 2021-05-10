import { useState } from 'react'

const useInput = ({
  defaultValue = ''
}) => {
  const [value, setvalue] = useState(defaultValue)
  
  const onChange = (e) => setvalue(e.target.value)

  return [
    value,
    onChange
  ]
}

export {
  useInput
}
