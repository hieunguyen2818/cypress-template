/// <reference types="cypress" />

import LoginPage from '../../support/pageObject/loginPage.cy'

describe('Login to demoguru page successfully', () => {
  let loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('auth/login')
  })

  it('Should login success by correct userName and passWord', () => {
    loginPage.inputUserName('nicholas@mailsac.com')
    loginPage.inputPassword('Password1@')
    loginPage.clickSubmit()
    cy.url().should('include', 'app/today');
  })

})
