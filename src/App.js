import React, { useState, useEffect } from 'react'
import omdbService from './services/omdb'
import Movies from './components/Movies'
import Chevron from './components/Chevron'
import SearchForm from './components/SearchForm'
import './App.css'

const { fetchFilms } = omdbService()

function App() {
  const [searchResult, setSearchResult] = useState()

  const handleFormSubmit = async (searchedFilm) => {
    const data = await fetchFilms(searchedFilm)

    setSearchResult(data)
  }

  return (
    <div className="App">
      <SearchForm onSubmit={handleFormSubmit} />
      {!searchResult ? (
        <p className="no-results">No results yet</p>
      ) : (
        <div className="search-results">
          <Chevron direction='left' />
          <Movies moviesList={searchResult.Search} />
          <Chevron direction='right' />
        </div>
      )}
    </div>
  )
}

export default App
