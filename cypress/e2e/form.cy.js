    /// <reference types="cypress" />

describe('Form Test - Checkout Process', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('should complete checkout form successfully', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="finish"]').click()
    
    cy.get('.complete-header').should('contain.text', 'Thank you for your order')
  })
})