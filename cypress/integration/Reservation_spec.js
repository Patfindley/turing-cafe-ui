describe('Reservations', () => {
  beforeEach(() => {
    cy.fixture('resyData.json')
      .then(data => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
          statusCode: 201,
          delay: 100,
          body: data
        })
      })
    cy.visit('http://localhost:3000')
    })

  it('Should fetch reservations', () => {
    cy.get('div .resy-card')
    // .should('have.length', 9)
  })

  it("should show error if fetch fails", () => {
    const errorMessage = 'No Reservations Found!';
    cy.intercept(
      {
        method: 'GET',
        url: 'http://localhost:3001/api/v1/reserations'
      },
      {
        statusCode: 500,
        message: errorMessage
      }
    )
  })

  it('should render reservations', () => {
    cy.get('div .resy-card')
    .should('be.visible')
  })
})
