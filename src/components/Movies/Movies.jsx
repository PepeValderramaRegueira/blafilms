import Movie from './../Movie'

const Movies = ({ moviesList }) => (
  <ul className="search-results-list">
    {moviesList.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
  </ul>
)

export default Movies
