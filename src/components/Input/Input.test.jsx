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

      expect(screen.getByRole('textbox')).toHaveProperty('value', 'input value')
      expect(screen.getByRole('textbox')).toHaveProperty('name', 'testing-input')
    })

    test('type', function() {
      render(
        <Input value="input value" name="testing-input" onChange={onChange} />
      )

      expect(screen.getByRole('textbox')).toHaveProperty('type', 'text')
    })

    test('disabled = true', function() {
      render(
        <Input
          value="input value"
          name="testing-input"
          onChange={onChange}
          disabled
        />
      )

      expect(screen.getByRole('textbox')).toHaveProperty('disabled', true)
    })

    test('disabled = false', function() {
      render(
        <Input value="input value" name="testing-input" onChange={onChange} />
      )

      expect(screen.getByRole('textbox')).toHaveProperty('disabled', false)
    })

    test("When the value prop changes, should update it's value", function() {
      const { rerender } = render(
        <Input value="input value" name="testing-input" onChange={onChange}/>
      )

      rerender(<Input value="changed value" name="testing-input" onChange={onChange}/>)

      expect(screen.getByRole('textbox')).toHaveAttribute('value', 'changed value')
    })
  })
})
