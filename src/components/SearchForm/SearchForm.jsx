import { useContext } from 'react'
import { FilmsContext, resetPage } from './../../store'
import Input from './../Input'
import Button from './../Button'
import { useInput } from './../../hooks'
import { withFetch } from './../../hoc'

const SearchForm = ({ fetchApi }) => {
  const { filmsData } = useContext(FilmsContext)
  const [searchedFilm, setSearchedFilm] = useInput('')
  const { isLoading } = filmsData
  
  const handleSubmit = async (e) => {
    e.preventDefault()
		fetchApi(searchedFilm, 1, resetPage)
  }
  
  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchedFilm}
        onChange={setSearchedFilm}
        placeholder="Search..."
        disabled={isLoading}
      />
      <Button label='Search' disabled={isLoading} />
    </form>
  )
}

export default withFetch(SearchForm)
