/// <reference types="cypress" />

import LoginPage from '../../support/pageObject/loginPage.cy'
let loginPage: LoginPage

describe('example to-do app', () => {
  loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/v4/')
  })

  it('Should login success by correct userName and passWord', () => {
    loginPage.inputUserName('kem')
    loginPage.inputPassword('kem')
    loginPage.clickSubmit();
  })

})
