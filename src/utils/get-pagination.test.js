import { getPagination } from './get-pagination'

describe('Testing getPagination functionality', function() {
  describe('Testing null values as parameters', function() {
    test('currentPage = null should throw new error', function() {
      expect(() => getPagination(null, 10)).toThrowError()
    })

    test('totalPages = null should throw new error', function() {
      expect(() => getPagination(10, null)).toThrowError()
    })
  })

  describe('Testing undefined values as parameters', function() {
    test('currentPage = undefined should throw new error', function() {
      expect(() => getPagination(undefined, 10)).toThrowError()
    })

    test('totalPages = undefined should throw new error', function() {
      expect(() => getPagination(10, undefined)).toThrowError()
    })
  })

  test('currentPage = 0 and totalPages = 10 should return { 0, 1 }', function() {
    const expected = {
      previousPage: 0,
      nextPage: 1
    }
    const result = getPagination(0, 10)

    expect(result).toEqual(expected)
  })

  test('currentPage = 1 and totalPages = 10 should return { 0, 2 }', function() {
    const expected = {
      previousPage: 0,
      nextPage: 2
    }
    const result = getPagination(1, 10)

    expect(result).toEqual(expected)
  })

  test('currentPage = 4 and totalPages = 10 should return { 3, 5 }', function() {
    const expected = {
      previousPage: 3,
      nextPage: 5
    }
    const result = getPagination(4, 10)

    expect(result).toEqual(expected)
  })

  test('currentPage = 9 and totalPages = 10 should return { 8, 10 }', function() {
    const expected = {
      previousPage: 8,
      nextPage: 10
    }
    const result = getPagination(9, 10)

    expect(result).toEqual(expected)
  })

  test('currentPage = 10 and totalPages = 10 should return { 9, 10 }', function() {
    const expected = {
      previousPage: 9,
      nextPage: 10
    }
    const result = getPagination(10, 10)

    expect(result).toEqual(expected)
  })
})
