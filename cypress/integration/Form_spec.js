describe('Reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have input form', () => {
    cy.get('form')
  })
})
