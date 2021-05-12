import { useContext, useState } from 'react'
import { FilmsContext, resetPage, updateCurrentSearch } from './../../store'
import Input from './../Input'
import Button from './../Button'
import { withFetch } from './../../hoc'

const SearchForm = ({ fetchApi }) => {
  const { filmsData, filmsDataDispatch } = useContext(FilmsContext)
  const { isLoading, currentSearch } = filmsData
  
  const handleSubmit = async (e) => {
    e.preventDefault()
		fetchApi(currentSearch, 1, resetPage)
  }

	const handleSearchedFilmChange = (e) => filmsDataDispatch(updateCurrentSearch(e.target.value))
  
  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={currentSearch}
        onChange={handleSearchedFilmChange}
        placeholder="Search..."
        name="searched-film"
        disabled={isLoading}
      />
      <Button label='Search' disabled={isLoading} />
    </form>
  )
}

export default withFetch(SearchForm)
