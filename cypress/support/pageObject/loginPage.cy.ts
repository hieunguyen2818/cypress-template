/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

require('cypress-xpath')

class EorOnboardingPage {
    USER_NAME = "//input[@name='uid']";
    PASSWORD = "//input[@name='password']";
    SUBMIT_BTN = '[type="submit"]';

    inputUserName(userName: string) {
        cy.xpath(this.USER_NAME).type(userName)
    }

    inputPassword(password: string) {
        cy.xpath(this.PASSWORD).type(password)
    }

    clickSubmit() {
        cy.get(this.SUBMIT_BTN).click()
    }
}
export default EorOnboardingPage