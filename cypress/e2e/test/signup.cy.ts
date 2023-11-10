/// <reference types="cypress" />

import SignUpPage from '../../support/pageObject/signupPage.cy'

describe('Login to demoguru page successfully', () => {
  let signUpPage = new SignUpPage()

  beforeEach(() => {
    cy.visit("auth/signup")
  })

  it('Should login success by correct userName and passWord', () => {
    signUpPage.inputEmail('nicholas@mailsac.com')
    signUpPage.inputPassword('Password1@')
    signUpPage.clickSignUpBtn()
  })

})
