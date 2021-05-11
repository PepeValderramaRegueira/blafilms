export const PAGE_SIZE = 10

function getPagination(currentPage, totalPages, pageSize = PAGE_SIZE) {
  const previousPage = currentPage > 1 ? currentPage - 1 : 1
  const lastPage = currentPage < totalPages ? currentPage + 1 : totalPages

  return {
    previousPage,
    lastPage
  }
}

export {
  getPagination
}
