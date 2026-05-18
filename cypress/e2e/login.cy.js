/// <reference types="cypress" />

describe('Login Functionality Tests', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  // Login Test 1: Valid credentials
  it('should login successfully with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.app_logo').should('contain.text', 'Swag Labs')
  })

  // Login Test 2: Invalid password
  it('should show error message with incorrect password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match')
  })

  // Login Test 3: Empty fields
  it('should show validation message when fields are empty', () => {
    cy.get('#login-button').click()
    
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required')
  })
})