import { homePage} from "../../pages/homePage"
const homePageObj = new homePage()
import homePageData from '../../fixtures/homePageData.json'


describe('Login with valid credentials', () => {


     before(() => {
        cy.login(homePageData.login.username, homePageData.login.password)

    })

     it('Add To Cart flow', () => {
            homePageObj.searchProduct(homePageData.product.productName)
            homePageObj.addToCart()

     })


});
