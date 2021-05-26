describe('Reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have input form', () => {
    cy.get('form')
  })

  it('Should have multiple inputs and submission', () => {
    cy.get('[class="name-input"]')
    .get('[class="date-input"]')
    .get('[class="time-input"]')
    .get('[class="guests-input"]')
    .get('[class="resy-button submit"]')

  })

  it('Should be able to fill out input form', () => {
    cy.get('[class="name-input"]').type('Gordon Ramsey')
    .should('have.value', 'Gordon Ramsey')
    .get('[class="date-input"]').type('07/21')
    .should('have.value', '07/21')
    .get('[class="time-input"]').type('11:59')
    .should('have.value', '11:59')
    .get('[class="guests-input"]').type('1')
    .should('have.value', '1')
  })

  it('Should show new reservation after "make reservation" button is clicked', () => {
    cy.get('[class="name-input"]').type('Gordon Ramsey')
    .get('[class="date-input"]').type('07/21')
    .get('[class="time-input"]').type('11:59')
    .get('[class="guests-input"]').type('1')
    .get('[class="resy-button submit"]').click()
    .get('[class="resy-name"]')
    .contains('Gordon Ramsey')

  })
})
