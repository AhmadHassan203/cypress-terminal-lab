/// <reference types="cypress" />

describe('Task 2 - Custom Command Demonstration', () => {
  
  beforeEach(() => {
    cy.login()
  })

  it('should successfully login using custom command', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')
    cy.get('.inventory_list').should('be.visible')
  })

  it('should add products to cart using custom command', () => {
    cy.addProductToCart('Sauce Labs Backpack')
    cy.addProductToCart('Sauce Labs Bike Light')
    
    cy.getCartItemCount().then((count) => {
      expect(count).to.equal(2)
    })
    
    cy.get('.shopping_cart_badge').should('have.text', '2')
  })

  it('should demonstrate reusable login across multiple tests', () => {
    cy.get('.inventory_item').should('have.length.at.least', 1)
  })
})
