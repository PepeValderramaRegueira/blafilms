export const FETCH_FILMS_DATA = 'FETCH_FILMS_DATA'
export const IS_LOADING_FILMS_DATA = 'IS_LOADING_FILMS_DATA'
export const INCREMENT_PAGE = 'INCREMENT_PAGE'
export const DECREMENT_PAGE = 'DECREMENT_PAGE'
export const RESET_PAGE = 'RESET_PAGE'

export const fetchFilmsData = (filmsData) => ({
  type: FETCH_FILMS_DATA,
  payload: {
    filmsData
  }
})

export const isLoadingFilmsData = (isLoading) => ({
  type: IS_LOADING_FILMS_DATA,
  payload: {
    isLoading
  }
})

export const incrementPage = () => ({
	type: INCREMENT_PAGE
})

export const decrementPage = () => ({
	type: DECREMENT_PAGE
})

export const resetPage = () => ({
	type: RESET_PAGE
})
