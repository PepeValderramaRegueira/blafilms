import { useReducer, createContext } from 'react'
import filmsReducer from './reducer'

const initialState = {
  Search: {},
  Response: "False",
  isLoading: false,
  totalResults: '',
  currentPage: 0,
	currentSearch: ''
}

const FilmsContext = createContext(initialState)

const FilmsProvider = ({ children }) => {
  const [filmsData, filmsDataDispatch] = useReducer(filmsReducer, initialState)
  
  return (
    <FilmsContext.Provider value={{filmsData, filmsDataDispatch}}>
      {children}
    </FilmsContext.Provider>
  )
}

export default FilmsProvider
export {
  FilmsContext,
  initialState
}
