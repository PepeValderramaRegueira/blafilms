import { useContext } from 'react'
import { FilmsContext } from './../../store'
import Chevron from './../Chevron'
import Movies from './../Movies'
import Loader from './../Loader'

const SearchResults = () => {
  const { filmsData } = useContext(FilmsContext)
  const { isLoading } = filmsData
  const noResultsYet = filmsData.Response === "False"

  if (isLoading) return <Loader />
  if (noResultsYet) return <p>No results yet</p>
  
  return (
    <div className="search-results">
      <Chevron direction='left' />
      <Movies moviesList={filmsData.Search} />
      <Chevron direction='right' />
    </div>
  )
}

export default SearchResults
