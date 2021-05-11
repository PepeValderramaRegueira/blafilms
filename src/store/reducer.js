import {
	FETCH_FILMS_DATA,
	IS_LOADING_FILMS_DATA,
	INCREMENT_PAGE,
	DECREMENT_PAGE,
	RESET_PAGE
} from './actions'
import { initialState } from './store'

function filmsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_FILMS_DATA:
      return {
        ...state,
        ...action.payload.filmsData
      }
    case IS_LOADING_FILMS_DATA:
      return { ...state, isLoading: action.payload.isLoading }
		case INCREMENT_PAGE:
			return {
				...state,
				currentPage: state.currentPage + 1
			}
		case DECREMENT_PAGE:
			return {
				...state,
				currentPage: state.currentPage - 1
			}
		case RESET_PAGE:
			return {
				...state,
				currentPage: 1
			}
    default:
      return {
				...state
			}
  }
}

export default filmsReducer
