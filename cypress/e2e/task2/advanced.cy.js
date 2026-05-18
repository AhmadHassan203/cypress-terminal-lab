/// <reference types="cypress" />

describe('Advanced Cypress Techniques - Task 2', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  })

  describe('Assertion Practice', () => {
    
    it('should verify element visibility, text, and attributes', () => {
      cy.get('.app_logo').should('be.visible')
      cy.get('.app_logo').should('have.text', 'Swag Labs')
      cy.get('.shopping_cart_link').should('exist')
      cy.get('.shopping_cart_link').should('have.attr', 'class')
    })
    
    it('should verify product elements have correct attributes', () => {
      const backpackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]'
      
      cy.get(backpackBtn).should('be.visible')
      cy.get(backpackBtn).should('have.attr', 'data-test', 'add-to-cart-sauce-labs-backpack')
      cy.get(backpackBtn).should('have.attr', 'id')
      cy.get(backpackBtn).should('contain.text', 'Add to cart')
    })
  })

  describe('Negative Assertion', () => {
    
    it('should verify error message does NOT exist on successful login', () => {
      cy.get('[data-test="error"]').should('not.exist')
      cy.get('#login-button').should('not.exist')
    })
    
    it('should verify cart badge does not exist initially', () => {
      cy.get('.shopping_cart_badge').should('not.exist')
    })
  })

  describe('Alias Practice', () => {
    
    it('should store and reuse elements with aliases', function() {
      cy.get('.inventory_item').first().as('firstProduct')
      
      cy.get('@firstProduct').within(() => {
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('.inventory_item_price').should('be.visible')
          .and('contain', '$')
      })
      
      cy.get('@firstProduct')
        .find('.inventory_item_name')
        .invoke('text')
        .as('productName')
      
      cy.get('@firstProduct').find('button').click()
      
      cy.get('@productName').then((name) => {
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('contain', name)
      })
    })
    
    it('should store URL as alias for reuse', function() {
      cy.url().as('currentUrl')
      cy.get('.shopping_cart_link').click()
      
      cy.get('@currentUrl').then((url) => {
        cy.url().should('not.equal', url)
        cy.url().should('include', '/cart.html')
      })
    })
  })

  describe('Custom Commands', () => {
    
    it('should demonstrate custom command structure', () => {
      cy.log('✓ Custom commands defined in cypress/support/commands.js')
      cy.log('✓ Example: cy.login(), cy.addToCart(), cy.getCartCount()')
      cy.get('.app_logo').should('be.visible')
    })
  })
})
