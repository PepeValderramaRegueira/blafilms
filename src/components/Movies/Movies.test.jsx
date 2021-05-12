import { render, screen } from '@testing-library/react'
import Movies from './Movies'

const moviesMock = [
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Title: "The Lord of the Rings: The Return of the King",
    Type: "movie",
    Year: "2003",
    imdbID: "tt0167260"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    Title: "The Lion King",
    Type: "movie",
    Year: "1994",
    imdbID: "tt0110357"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "King Kong",
    Type: "movie",
    Year: "2005",
    imdbID: "tt0360717"
  }
]

describe('Testing Movies component', function() {
  test('Renders without crashing', function() {
    render(<Movies moviesList={moviesMock}/>)
  })

  test('Renders the correct number of list items', function() {
    render(<Movies moviesList={moviesMock}/>)

    expect(screen.getAllByRole('listitem').length).toBe(3)
  })
})
