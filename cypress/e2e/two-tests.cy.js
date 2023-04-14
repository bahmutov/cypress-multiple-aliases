/// <reference types="cypress" />

describe('pass value from one test to another', () => {
  beforeEach(() => {
    cy.visit('public/index.html')
  })

  it('has two number inputs', () => {
    cy.get('[name=a]')
      .should('have.prop', 'valueAsNumber')
      // log the number to the Command Log
      .should('be.finite')
      .then((a) => Cypress.env('a', a))
    cy.get('[name=b]')
      .should('have.prop', 'valueAsNumber')
      .should('be.finite')
      .then((b) => Cypress.env('b', b))
  })

  it('has values set', () => {
    cy.contains('#result', Cypress.env('a') + Cypress.env('b'))
  })
})
