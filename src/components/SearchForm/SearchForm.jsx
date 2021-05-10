import { useContext } from 'react'
import { FilmsContext, fetchFilmsData, isLoadingFilmsData } from './../../store'
import Input from './../Input'
import Button from './../Button'
import omdbService from './../../services/omdb'
import { useInput } from './../../hooks'

const SearchForm = ({ onSubmit }) => {
  const { filmsDataDispatch } = useContext(FilmsContext)
  const [searchedFilm, setSearchedFilm] = useInput('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    filmsDataDispatch(isLoadingFilmsData(true))

    const filmsData = await omdbService().fetchFilms(searchedFilm)

    filmsDataDispatch(isLoadingFilmsData(false))
    filmsDataDispatch(fetchFilmsData(filmsData))
  }
  
  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchedFilm}
        onChange={setSearchedFilm}
        placeholder="Search..."
      />
      <Button label='Search' />
    </form>
  )
}

export default SearchForm
