import { useContext } from 'react'
import { FilmsContext, incrementPage, decrementPage } from './../../store'
import Chevron from './../Chevron'
import Movies from './../Movies'
import Loader from './../Loader'
import Message from './../Message'
import { calculateTotalPages, getPagination } from './../../utils'
import { withFetch } from './../../hoc'

const SearchResults = ({ fetchApi }) => {
  const { filmsData } = useContext(FilmsContext)
  const { isLoading } = filmsData
  const noResultsYet = filmsData.Response === "False"

  if (isLoading) return <Loader />
  if (noResultsYet) return <Message message="No results yet"/>

  const { currentPage, totalResults } = filmsData
  const totalPages = calculateTotalPages(totalResults)
  const { previousPage, nextPage } = getPagination(currentPage, totalPages)

	const fetchNextFilms = (pageAction, page) => {
		fetchApi('text', page, pageAction)
	}

	const prevPageIsDisabled = currentPage === 1
	const nextPageIsDisabled = currentPage === totalPages
  
  return (
    <div className="search-results">
      <Chevron
				direction='left'
				isDisabled={prevPageIsDisabled}
				onClick={!prevPageIsDisabled ? () => fetchNextFilms(decrementPage, previousPage) : null}
			/>
      <Movies moviesList={filmsData.Search} />
      <Chevron 
				direction='right'
				isDisabled={nextPageIsDisabled}
				onClick={!nextPageIsDisabled ? () => fetchNextFilms(incrementPage, nextPage) : null}
			/>
    </div>
  )
}

export default withFetch(SearchResults)
