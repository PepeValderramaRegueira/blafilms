import FilmsProvider, { FilmsContext } from './store'
import { FETCH_FILMS_DATA, fetchFilmsData, isLoadingFilmsData } from './actions'

export default FilmsProvider
export {
  FilmsContext,
  FETCH_FILMS_DATA,
  fetchFilmsData,
  isLoadingFilmsData
}
