/// <reference types="cypress" />

describe('Task 2 - Custom Command Demonstration', () => {
  
  // Using the custom login command instead of writing steps each time
  beforeEach(() => {
    cy.login()  // ← This is the custom command!
  })

  it('should successfully login using custom command', () => {
    // After cy.login(), we should be on the inventory page
    cy.url().should('include', '/inventory.html')
    cy.get('.app_logo').should('be.visible')
    cy.get('.inventory_list').should('be.visible')
  })

  it('should add products to cart using custom command', () => {
    // Using custom addProductToCart command
    cy.addProductToCart('Sauce Labs Backpack')
    cy.addProductToCart('Sauce Labs Bike Light')
    
    // Using custom getCartItemCount command
    cy.getCartItemCount().then((count) => {
      expect(count).to.equal(2)
    })
    
    // Verify cart badge shows 2
    cy.get('.shopping_cart_badge').should('have.text', '2')
  })

  it('should demonstrate reusable login across multiple tests', () => {
    // This test starts already logged in from beforeEach
    // No need to repeat username/password code!
    cy.get('.inventory_item').should('have.length.at.least', 1)
  })
})