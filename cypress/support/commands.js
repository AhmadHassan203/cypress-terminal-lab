Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/')
  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
  cy.url().should('include', '/inventory.html')
})

Cypress.Commands.add('addProductToCart', (productName) => {
  const testId = productName.toLowerCase().replace(/ /g, '-')
  cy.get(`[data-test="add-to-cart-${testId}"]`).click()
})

Cypress.Commands.add('getCartItemCount', () => {
  return cy.get('body').then(($body) => {
    if ($body.find('.shopping_cart_badge').length > 0) {
      return cy.get('.shopping_cart_badge').invoke('text').then(parseInt)
    }
    return 0
  })
})