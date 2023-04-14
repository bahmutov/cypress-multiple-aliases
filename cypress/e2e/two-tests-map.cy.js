/// <reference types="cypress" />

import 'cypress-map'

describe('pass value from one test to another', () => {
  beforeEach(() => {
    cy.visit('public/index.html')
  })

  it('has two number inputs', () => {
    cy.get('[name=a]')
      .should('have.prop', 'valueAsNumber')
      // log the number to the Command Log
      .should('be.finite')
      .asEnv('a')
    cy.get('[name=b]')
      .should('have.prop', 'valueAsNumber')
      .should('be.finite')
      .asEnv('b')
  })

  it('has values set', () => {
    // check saved values
    expect(Cypress.env('a'), 'a').to.be.within(1, 10)
    expect(Cypress.env('b'), 'b').to.be.within(1, 10)
    cy.contains('#result', Cypress.env('a') + Cypress.env('b'))
  })
})
