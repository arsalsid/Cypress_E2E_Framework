export class homePage {

    webLocators = {
        search_input_Locator: '.form-control.input-lg',
        clickOn_SearchBtn_Locator: '.btn.btn-default.btn-lg',
    }

    searchProduct(productName) {
        cy.get(this.webLocators.search_input_Locator).type(productName)
        cy.get(this.webLocators.clickOn_SearchBtn_Locator).click()

    }

    addToCart() {
        
    }

    verifySucessMessage() {

    }


}