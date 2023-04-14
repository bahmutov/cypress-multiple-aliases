/// <reference types="cypress" />

describe('Use beforeEach hook and number values', () => {
  beforeEach(function () {
    cy.visit('public/index.html')
  })

  it('has two numbers', () => {
    cy.get('[name=a]')
      .should('have.prop', 'valueAsNumber')
      .as('a')
      // log the number to the Command Log
      .should('be.finite')
    cy.get('[name=b]')
      .should('have.prop', 'valueAsNumber')
      .as('b')
      .should('be.finite')
  })

  it('has values set', function () {
    cy.contains('#result', this.a + this.b)
  })
})
