const PAGE_SIZE = 10

function calculateTotalPages(totalResults, pageSize = PAGE_SIZE) {
  if (!totalResults || !pageSize) {
    throw new Error('Invalid arguments')
  }

  const totalResultsAbs = Math.abs(totalResults)
  const pageSizeAbs = Math.abs(pageSize)

  const lastPageRest = totalResultsAbs % pageSizeAbs !== 0 ? 1 : 0
  const totalPages = Math.floor(totalResultsAbs / pageSizeAbs) + lastPageRest

  return totalPages
}

export {
  calculateTotalPages
}
