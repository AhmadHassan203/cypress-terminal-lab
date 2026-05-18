/// <reference types="cypress" />

describe('Navigation Tests', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('should navigate to product details when clicking a product', () => {
    cy.get('.inventory_item_name').first().click()
    
    cy.url().should('include', '/inventory-item.html')
    cy.get('.inventory_details_name').should('be.visible')
  })

  it('should navigate between cart and inventory pages correctly', () => {
    cy.get('.app_logo').should('contain.text', 'Swag Labs')
    
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })
})
