import { PAGE_SIZE } from './get-pagination'

function calculateTotalPages(totalResults, pageSize = PAGE_SIZE) {
  const lastPageRest = totalResults % pageSize !== 0 ? 1 : 0
  const totalPages = Math.floor(totalResults / pageSize) + lastPageRest

  return totalPages
}

export {
  calculateTotalPages
}
