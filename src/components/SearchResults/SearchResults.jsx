import { useContext } from 'react'
import { FilmsContext } from './../../store'
import Chevron from './../Chevron'
import Movies from './../Movies'
import Loader from './../Loader'
import { calculateTotalPages, getPagination } from './../../utils'

const SearchResults = () => {
  const { filmsData } = useContext(FilmsContext)
  const { isLoading } = filmsData
  const noResultsYet = filmsData.Response === "False"

  if (isLoading) return <Loader />
  if (noResultsYet) return <p>No results yet</p>

  const { currentPage, totalResults } = filmsData
  const totalPages = calculateTotalPages(totalResults)
  const { previousPage, lastPage } = getPagination(currentPage, totalPages)
  console.log('currentPage', currentPage)
  console.log('currentPage < totalPages', currentPage === totalPages)
  
  return (
    <div className="search-results">
      <Chevron direction='left' isDisabled={currentPage === 1} />
      <Movies moviesList={filmsData.Search} />
      <Chevron direction='right' isDisabled={currentPage === totalPages} />
    </div>
  )
}

export default SearchResults
