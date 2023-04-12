/// <reference types="cypress" />

it('adds numbers via aliases', () => {
  cy.visit('public/index.html')
  cy.get('[name=a]').invoke('val').then(parseInt).as('a')
  cy.get('[name=b]').invoke('val').then(parseInt).as('b')
  cy.get('#result')
    .invoke('text')
    .then(parseInt)
    .as('result')
    .then(function () {
      expect(this.a + this.b).to.equal(this.result)
    })
})

// these tests are written to show better testing practices
// 1: do not trust the data from the page
// 2: do not compute the result, know what to expect
// 3: control the page by typing our values
// 4: use beforeEach hook to get the numbers
it('checks the page', () => {
  cy.visit('public/index.html')
  cy.get('[name=a]').should('have.value', '2')
  cy.get('[name=b]').should('have.value', '3')
  cy.contains('#result', '5')
})

it('handles empty inputs', () => {
  cy.visit('public/index.html')
  cy.get('[name=a]').clear()
  cy.get('[name=b]').clear()
  cy.contains('#result', 'empty')
})

it('adds the given numbers', () => {
  cy.visit('public/index.html')
  cy.get('[name=a]').clear().type(10)
  cy.get('[name=b]').clear().type(30)
  cy.contains('#result', '40')
})

describe('Use beforeEach hook', () => {
  beforeEach(() => {
    cy.visit('public/index.html')
    cy.get('[name=a]').invoke('val').then(parseInt).as('a')
    cy.get('[name=b]').invoke('val').then(parseInt).as('b')
  })

  it('has values set', function () {
    cy.contains('#result', this.a + this.b)
  })
})
