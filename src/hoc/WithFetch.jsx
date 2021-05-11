import React, { useContext } from 'react'
import { fetchFilmsData, isLoadingFilmsData, FilmsContext } from './../store'
import omdbService from './../services/omdb'

const withFetch = (ComponentWrapper) => ({...props}) => {
	const { filmsData, filmsDataDispatch } = useContext(FilmsContext)
	const { currentSearch } = filmsData
	
	const fetchApi = async (searchedFilmOld, page, pageAction) => {
		filmsDataDispatch(isLoadingFilmsData(true))
    
    const filmsData = await omdbService().fetchFilms(currentSearch, page)

    filmsDataDispatch(isLoadingFilmsData(false))
    filmsDataDispatch(fetchFilmsData(filmsData))
		filmsDataDispatch(pageAction())
	}

	return <ComponentWrapper fetchApi={fetchApi} {...props} />
}

export {
	withFetch
}
