import propTypes from 'prop-types'
import { movieType } from './../Movie'

import Movie from './../Movie'

const Movies = ({ moviesList }) => (
  <ul className="search-results-list">
    {moviesList.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
  </ul>
)

Movies.propTypes = {
  moviesList: propTypes.arrayOf(movieType)
}

export default Movies
