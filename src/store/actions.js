export const FETCH_FILMS_DATA = 'FETCH_FILMS_DATA'
export const IS_LOADING_FILMS_DATA = 'IS_LOADING_FILMS_DATA'

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
