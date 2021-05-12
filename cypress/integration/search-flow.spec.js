describe('Testing app', function() {
  it('Visit the app', function() {
    cy.visit('http://localhost:3000/')
  })

  it('Search input exists', function() {
    cy.get('.input').as('searchInput')
  })

  it('Search for a film', function() {
    cy.get('.input').focus().type('hobbit')
    cy.get('button').click()
  })

  it('See the search results', function() {
    cy.get('.search-results-list').children().should('have.length', 10)
  })

  it('Loads more results', function() {
    cy.get('.chevron').last().click()
    cy.get('.search-results-list').children().should('have.length', 10)
  })

  it('Make new search', function() {
    cy.get('.input').focus()
    Array(6).fill(null).forEach(() => cy.get('.input').focus().type('{backspace}'))
    cy.get('.input').focus().type('the lord of the rings')
    cy.get('button').click()
  })

  it('See new movies', function() {
    cy.get('.search-results-list').children().should('have.length', 10)
  })
})
