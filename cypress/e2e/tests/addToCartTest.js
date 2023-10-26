import { homePage, homePage } from "../../pages/homePage"
import homePageData from '../../fixtures/homePageData.json'

const homePageObj = new homePage()

descirbe('test automation', () => {
    before(() => {
        cy.login(homePageData.login.username,homePageData.login.password)
    })


    it('Add To Cart', () => {
        homePageObj.searchProduct(homePageData.product.productName)
        homePageObj.addToCart()
    })

})