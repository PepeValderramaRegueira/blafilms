import { deleteDuplicated } from "../utils/delete-duplicated"

const OMDB_API_KEY = 'a461e386'
const OMDB_BASE_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

export const PAGE_SIZE = 10

function omdbService() {
  async function fetchFilms(keyword, page = 1) {
    try {
      const fetchFilmsUrl = `${OMDB_BASE_URL}&s=${keyword}&page=${page}`
      const filmsResponse = await fetch(fetchFilmsUrl)
      const parsedResponse = await filmsResponse.json()
      const nonRepeatedFilms = deleteDuplicated(parsedResponse.Search)

      return {
        ...parsedResponse,
        totalResults: parseInt(parsedResponse.totalResults),
        Search: nonRepeatedFilms
      }
    } catch(error) {
      return {
        Response: "False"
      }
    }
  }

  return {
    fetchFilms
  }
}

export default omdbService
