import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'


const register = new registerPage()
describe(' test automation', () => {

    it('Register flow', () => {
        register.visit()
        register.enterFirstName(registerData.firstName)
        register.enterLastName(registerData.lastName)
        register.enterEmail(registerData.email)
        register.enterTelephone(registerData.telephone)
        register.enterPassword(registerData.password)
        register.selectCheckbox()
        register.clickOnContinue()

    })


})