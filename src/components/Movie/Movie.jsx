import placeholderImg from './../../assets/images/placeholder.png'

const Movie = ({ movie }) => {
  const { imdbID, Poster, Title, Type, Year } = movie;
  
  return (
    <li key={`${imdbID}`}>
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

export default Movie
