/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath')

class LoginPage {
    USER_NAME = "//input[@type='email']";
    PASSWORD = "//input[@type='password']";
    SUBMIT_BTN = '//button[@type="submit"]';

    inputUserName(userName: string) {
        cy.xpath(this.USER_NAME).type(userName)
    }

    inputPassword(password: string) {
        cy.xpath(this.PASSWORD).type(password)
    }

    clickSubmit() {
        cy.xpath(this.SUBMIT_BTN).click()
    }
}
export default LoginPage