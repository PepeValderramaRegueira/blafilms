import Input from './../Input'
import Button from './../Button'
import { useInput } from './../../hooks'

const SearchForm = ({ onSubmit }) => {
  const [searchedFilm, setSearchedFilm] = useInput('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(searchedFilm)
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
