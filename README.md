# 🎯 Cypress Terminal Lab

A comprehensive Cypress automation testing framework showcasing advanced end-to-end testing techniques and best practices for web application testing.

## 📋 Overview

This project demonstrates professional-grade Cypress testing with multiple test suites covering:
- **Authentication** - Login and session management
- **Form Handling** - Form validation and submission
- **Navigation** - Page routing and user flows
- **Advanced Scenarios** - Complex testing patterns
- **Custom Commands** - Reusable testing utilities

## 🚀 Features

✨ **Well-Structured Test Suites**
- Modular and maintainable test organization
- Clear test descriptions and assertions
- Comprehensive test coverage

🔧 **Custom Commands & Utilities**
- Reusable command definitions in `cypress/support/commands.js`
- Global configuration in `cypress/support/e2e.js`
- Test fixtures for mock data

⚙️ **Professional Configuration**
- Configured with SauceDemo for reliable testing
- Optimized viewport settings (1280x720)
- Proper base URL configuration

📊 **Test Coverage**
- `login.cy.js` - Authentication workflows
- `form.cy.js` - Form validation and submission
- `navigation.cy.js` - Page navigation flows
- `advanced.cy.js` - Complex test scenarios
- `custom-command-demo.cy.js` - Custom command usage

## 📦 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AhmadHassan203/cypress-terminal-lab.git
   cd cypress-terminal-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx cypress --version
   ```

## 🎮 Running Tests

### Interactive Mode (Cypress UI)
Launch the Cypress Test Runner for interactive testing:
```bash
npx cypress open
```

### Headless Mode (CLI)
Run all tests in headless mode:
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Run with Specific Browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## 📁 Project Structure

```
cypress-terminal-lab/
├── cypress/
│   ├── e2e/                          # Test specifications
│   │   ├── login.cy.js              # Authentication tests
│   │   ├── form.cy.js               # Form handling tests
│   │   ├── navigation.cy.js          # Navigation tests
│   │   ├── advanced.cy.js            # Advanced scenarios
│   │   └── custom-command-demo.cy.js # Custom command examples
│   ├── fixtures/                     # Test data and mocks
│   │   └── example.json
│   └── support/                      # Cypress configuration
│       ├── e2e.js                   # Global test setup
│       └── commands.js              # Custom command definitions
├── cypress.config.js                 # Cypress configuration
├── package.json                      # Project dependencies
├── package-lock.json                 # Dependency lock file
└── README.md                         # This file
```

## ⚙️ Configuration

The project is configured via `cypress.config.js`:

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
})
```

**Configuration Details:**
- **baseUrl** - Default application URL for all tests
- **supportFile** - Global test configuration and setup
- **specPattern** - Pattern for test file discovery
- **viewportWidth/Height** - Browser window dimensions

## 🧪 Test Examples

### Login Test
```javascript
it('should login successfully with valid credentials', () => {
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
  
  cy.url().should('include', '/inventory.html')
  cy.get('.inventory_list').should('be.visible')
})
```

### Form Submission Test
```javascript
it('should submit form with valid data', () => {
  cy.get('form').within(() => {
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('button[type="submit"]').click()
  })
})
```




## 👤 Author

**Ahmad Hassan**
- GitHub: [@AhmadHassan203](https://github.com/AhmadHassan203)



