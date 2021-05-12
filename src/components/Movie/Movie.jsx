import placeholderImg from './../../assets/images/placeholder.png'
import propTypes from 'prop-types'

const Movie = ({ movie }) => {
  const { Poster, Title, Type, Year } = movie;
  
  return (
    <li>
      <article className="search-item">
        <img
          src={Poster === 'N/A' ? placeholderImg : Poster}
          alt={`${Title} poster`}
        />
        <div className="search-item-data">
          <h2 className="title">{Title}</h2>
          <p className="meta">{`${Type} | ${Year}`}</p>
        </div>
      </article>
    </li>
  )
}

const movieType = propTypes.shape({
  imdbID: propTypes.string,
  Poster: propTypes.string,
  Title: propTypes.string,
  Type: propTypes.string,
  Year: propTypes.string
})

Movie.propTypes = {
  movie: movieType
}

export default Movie
export {
  movieType
}
