/// <reference types="cypress" />

import LoginPage from '../../support/pageObject/loginPage.cy'

describe('example to-do app', () => {
  let loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('https://demo.guru99.com/v4/')
  })

  it('Should login success by correct userName and passWord', () => {
    loginPage.inputUserName('kem')
    loginPage.inputPassword('kem')
    loginPage.clickSubmit()
  })

})
