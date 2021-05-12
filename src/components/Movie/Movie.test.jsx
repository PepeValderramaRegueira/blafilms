import { render, screen } from '@testing-library/react'
import Movie from './Movie'

const movieMock = {
  imdbID: 'tt0167260',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  Title: 'The Lord of the Rings: The Return of the King',
  Type: 'movie',
  Year: '2003'
}

describe('Testing Movie component', function() {
  test('Renders without crashing', function() {
    render(<Movie movie={movieMock}/>)
  })

  describe('Testing properties', function() {
    test('Should render all properties correctly', function() {
      const renderedMovie = render(<Movie movie={movieMock}/>)

      const expectedTitle = 'The Lord of the Rings: The Return of the King'
      const expectedPosterUrl = 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      const expectedPosterAlt = 'The Lord of the Rings: The Return of the King poster'
      const expectedTypeAndYear = 'movie | 2003'

      expect(renderedMovie.getByRole('heading')).toHaveTextContent(expectedTitle)
      expect(renderedMovie.getByRole('img')).toHaveAttribute('src', expectedPosterUrl)
      expect(renderedMovie.getByRole('img')).toHaveAttribute('alt', expectedPosterAlt)
      expect(renderedMovie.container.querySelector('.meta')).toHaveTextContent(expectedTypeAndYear)
    })
  })
})
