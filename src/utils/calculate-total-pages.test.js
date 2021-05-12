import { calculateTotalPages } from './calculate-total-pages'

describe('Testing calculateTotalPages functionality', function() {
  describe('Testing null value as parameters', function() {
    test('pageSize = null should throw new error', function() {
      expect(() => calculateTotalPages(1, null)).toThrowError()
    })

    test('totalResults = null should throw new error', function() {
      expect(() => calculateTotalPages(null, 10)).toThrowError()
    })

    test('totalResults = null and pageSize = null should throw new error', function() {
      expect(() => calculateTotalPages(null, null)).toThrowError()
    })
  })

  describe('Testing undefined value as parameters', function() {
    test('pageSize = undefined should work correctly', function() {
      const totalResults = 100
      const expected = 10
      const result = calculateTotalPages(totalResults, undefined)
  
      expect(result).toBe(expected)
    })
  
    test('totalResults = undefined should throw new error', function() {
      expect(() => calculateTotalPages(undefined, 10)).toThrowError()
    })

    test('totalResults = undefined and pageSize = undefined should throw new error', function() {
      expect(() => calculateTotalPages(undefined, undefined)).toThrowError()
    })
  })

  test('totalResults = 1000 and default pageSize should return 100', function() {
    const expected = 100
    const result = calculateTotalPages(1000)

    expect(result).toBe(expected)
  })

  describe('Testing negative numbers as parameters', function() {
    test('totalResults = -100 and pageSize = 4 should return 25', function() {
      const expected = 25
      const result = calculateTotalPages(-100, 4)

      expect(result).toBe(expected)
    })

    test('totalResults = 200 and pageSize = -4 should return 50', function() {
      const expected = 50
      const result = calculateTotalPages(200, -4)

      expect(result).toBe(expected)
    })

    test('totalResults = -100 and pageSize = -5 should return 20', function() {
      const expected = 20
      const result = calculateTotalPages(-100, -5)

      expect(result).toBe(expected)
    })
  })

  test('totalResults = 154 should return 16', function() {
    const expected = 16
    const result = calculateTotalPages(154)

    expect(result).toBe(expected)
  })

  test('totalResults = 15 and pageSize = 3 should return 5', function() {
    const expected = 5
    const result = calculateTotalPages(15, 3)

    expect(result).toBe(expected)
  })

  test('totalResults = 20 and pageSize = 5 should return 4', function() {
    const totalResults = 20
    const pageSize = 5
    const expected = 4
    const result = calculateTotalPages(totalResults, pageSize)

    expect(result).toBe(expected)
  })
})
