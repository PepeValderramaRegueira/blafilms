function getPagination(currentPage, totalPages) {
  const previousPage = currentPage > 1 ? currentPage - 1 : 0
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages

  return {
    previousPage,
    nextPage
  }
}

export {
  getPagination
}
