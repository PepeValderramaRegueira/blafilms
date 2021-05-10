import React, { useState, useEffect } from 'react'
import omdbService from './services/omdb'
import { ReactComponent as ChevronRight } from './chevron-right.svg'
import { ReactComponent as ChevronLeft } from './chevron-left.svg'
import placeholderImg from './placeholder.png'
import './App.css'

const { fetchFilms } = omdbService()

function App() {
  const [searchResult, setSearchResult] = useState()
  const [searchedFilm, setSearchedFilm] = useState('')

  const handleSearchedFilmChange = e => setSearchedFilm(e.target.value)

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const data = await fetchFilms(searchedFilm)

    setSearchResult(data)
  }

  return (
    <div className="App">
      <form className="search">
        <input
          type="text"
          value={searchedFilm}
          onChange={handleSearchedFilmChange}
          placeholder="Search..."
        />
        <button type="submit" onClick={handleFormSubmit}>Search</button>
      </form>
      {!searchResult ? (
        <p className="no-results">No results yet</p>
      ) : (
        <div className="search-results">
          <div className="chevron">
            <ChevronLeft />
          </div>
          <div className="search-results-list">
            {searchResult.Search.map((result, idx) => (
              <div key={`${result.imdbID}`} className="search-item">
                <img
                  src={result.Poster === 'N/A' ? placeholderImg : result.Poster}
                  alt="poster"
                />
                <div className="search-item-data">
                  <div className="title">{result.Title}</div>
                  <div className="meta">{`${result.Type} | ${result.Year}`}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
