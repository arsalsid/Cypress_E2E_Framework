
export class registerPage {

    webLocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        privacyPolicyCheck: 'input[type="checkbox"]',
        continueButton: '.pull-right > .btn'
    }

    visit() {
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(firstName) {
        cy.get(this.webLocators.firstName).type(firstName)
    }
    enterLastName(lastName) {
        cy.get(this.webLocators.lastName).type(lastName)
    }
    enterEmail(email) {
        cy.get(this.webLocators.email).type(email)
    }
    enterTelephone(phoneNo) {
        cy.get(this.webLocators.telephone).type(phoneNo)
    }
    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.passwordConfirm).type(password)
    }
    selectCheckbox() {
        cy.get(this.webLocators.privacyPolicyCheck).check()
    }
    clickOnContinue() {
        cy.get(this.webLocators.continueButton).click()
        
    }
}

