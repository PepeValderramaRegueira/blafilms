import { render, screen } from '@testing-library/react'
import Input from './Input'

const onChange = jest.fn()

describe('Testing Input component', function() {
  test('Renders without crashing', function() {
    render(
      <Input value="input value" name="testing-input" onChange={onChange} />
    )
  })

  describe('Testing properties', function() {
    test('value and name', function() {
      render(
        <Input value="input value" name="testing-input" onChange={onChange}/>
      )

      expect(screen.getByDisplayValue('input value')).toBeInTheDocument()
      expect(screen.getByDisplayValue('input value')).toHaveProperty('name', 'testing-input')
    })

    test('type', function() {
      const input = render(
        <Input value="input value" name="testing-input" onChange={onChange} />
      ).container.firstChild

      expect(input).toHaveProperty('type', 'text')
    })

    test('disabled = true', function() {
      const input = render(
        <Input
          value="input value"
          name="testing-input"
          onChange={onChange}
          disabled
        />
      ).container.firstChild

      expect(input).toHaveProperty('disabled', true)
    })

    test('disabled = false', function() {
      const input = render(
        <Input value="input value" name="testing-input" onChange={onChange} />
      ).container.firstChild

      expect(input).toHaveProperty('disabled', false)
    })

    test("When the value prop changes, should update it's value", function() {
      const { rerender } = render(
        <Input value="input value" name="testing-input" onChange={onChange}/>
      )

      rerender(<Input value="changed value" name="testing-input" onChange={onChange}/>)

      expect(screen.getByDisplayValue('changed value')).toBeInTheDocument()
    })
  })
})
