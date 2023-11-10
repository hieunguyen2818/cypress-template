/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath')

class SignUpPage {
    EMAIL = "//input[@type='email']";
    PASSWORD = "//input[@type='password']";
    SIGNUP_BTN = '//button[@type="submit"]';

    inputEmail(email: string) {
        cy.xpath(this.EMAIL).type(email)
    }

    inputPassword(password: string) {
        cy.xpath(this.PASSWORD).type(password)
    }

    clickSignUpBtn() {
        cy.xpath(this.SIGNUP_BTN).click()
    }
}
export default SignUpPage