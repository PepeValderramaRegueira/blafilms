import { deleteDuplicated } from './delete-duplicated'

describe('Testing deletedDuplicated functionality', function() {
  test('Passing null array should return an empty array', function() {
    const expected = []
    const result = deleteDuplicated(null)

    expect(result).toEqual(expected)
  })

  test('Passing undefined array should return an empty array', function() {
    const expected = []
    const result = deleteDuplicated(undefined)

    expect(result).toEqual(expected)
  })

  test('Passing array of strings should return the array without duplicated chars', function() {
    const chars = ['a', 'a', 'b', 'c', 'd', 'c', 'd']
    const expected = ['a', 'b', 'c', 'd']
    const result = deleteDuplicated(chars)
    
    expect(result).toEqual(expected)
  })

  test('Passing array of objects should return the array without duplicated objects', function() {
    const objects = [
      { name: 'John', age: 23 },
      { name: 'Marie', age: 32 },
      { name: 'Mike', age: 43 },
      { name: 'John', age: 23 }
    ]
    const expected = [
      { name: 'John', age: 23 },
      { name: 'Marie', age: 32 },
      { name: 'Mike', age: 43 },
    ]
    const result = deleteDuplicated(objects)
    
    expect(result).toEqual(expected)
  })

  test('Passing array of numbers should return the array without duplicated numbers', function() {
    const numbers = [1, 2, 5, 2, 1, 5, 7, 0, 7, 9]
    const expected = [1, 2, 5, 7, 0, 9]
    const result = deleteDuplicated(numbers)

    expect(expected).toEqual(result)
  })
})
