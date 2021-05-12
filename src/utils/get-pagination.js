function getPagination(currentPage, totalPages) {
  const currentPageIsValid = !(currentPage === null || currentPage === undefined)
  const totalPagesIsValid = !(totalPages === null || totalPages === undefined)

  if (!currentPageIsValid || !totalPagesIsValid) {
    throw new Error('Invalid parameters')
  }
  
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
