import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Testing Button component', function() {
  test('Renders without crashing', function() {
    render(<Button label='Button'/>)
  })

  describe('Testing properties', function() {
    test('label', function() {
      render(<Button label='Button label' type="submit" />)
  
      expect(screen.getByText('Button label')).toBeInTheDocument()
    })

    test('type = submit', function() {
      render(<Button type="submit" label="Submit button"/>)

      expect(screen.getByText('Submit button')).toHaveProperty('type', 'submit')
    })

    test('type = button', function() {
      render(<Button type="button" label="Button"/>)

      expect(screen.getByText('Button')).toHaveProperty('type', 'button')
    })

    test('disabled = true', function() {
      render(<Button label="Disabled" disabled />)

      expect(screen.getByText('Disabled')).toHaveProperty('disabled', true)
    })

    test('disabled = false', function() {
      render(<Button label="Enabled"/>)

      expect(screen.getByText('Enabled')).toHaveProperty('disabled', false)
    })
  })
})
