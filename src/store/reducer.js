import { FETCH_FILMS_DATA, IS_LOADING_FILMS_DATA } from './actions'
import { initialState } from './store'

function filmsReducer(state = initialState, action) {
  // console.log('el state', state)
  console.log('el action', action)
  
  switch(action.type) {
    case FETCH_FILMS_DATA:
      return {
        ...state,
        ...action.payload.filmsData,
        currentPage: action.payload.filmsData.newCurrentPage
      }
    case IS_LOADING_FILMS_DATA:
      return { ...state, isLoading: action.payload.isLoading }
    default:
      return state
  }
}

export default filmsReducer
