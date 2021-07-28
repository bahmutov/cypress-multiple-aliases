/// <reference types="cypress" />

it('adds numbers', () => {
  cy.visit('public/index.html')
  cy.get('[name=a]')
    .invoke('val')
    .then(parseInt)
    .then((a) => {
      cy.get('[name=b]')
        .invoke('val')
        .then(parseInt)
        .then((b) => {
          cy.get('#result')
            .invoke('text')
            .then(parseInt)
            .then((result) => {
              expect(a + b).to.eq(result)
            })
        })
    })
})

it('adds numbers via aliases', () => {
  cy.visit('public/index.html')
  cy.get('[name=a]').invoke('val').then(parseInt).as('a')
  cy.get('[name=b]').invoke('val').then(parseInt).as('b')
  cy.get('#result')
    .invoke('text')
    .then(parseInt)
    .as('result')
    .then(function () {
      expect(this.a + this.b).to.eq(this.result)
    })
})
