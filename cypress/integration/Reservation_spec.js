describe('Reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render reservations', () => {
    cy.get('div .resy-card')
    .should('be.visible')
  })
})
