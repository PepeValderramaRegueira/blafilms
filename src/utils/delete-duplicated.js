/**
 * Delete all the duplicated items given an array.
 * 
 * @param { Array } itemsArray - Array that we want to delete duplicated items
 * @returns { Array } New array without duplicated items
 */
function deleteDuplicated(itemsArray) {
  return [
    ...new Set(itemsArray.map(JSON.stringify))
  ].map(JSON.parse)
}

export {
  deleteDuplicated
}
