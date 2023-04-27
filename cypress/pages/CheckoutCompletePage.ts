import BasePage from './BasePage';
import { faker } from '@faker-js/faker';

const locators = {
    COMPLETE_LOGO : '[class=pony_express]',
    COMPLETE_HEADER : '[class=complete-header]',
    COMPLETE_TEXT : '[class=complete-text]'

  }

class CheckoutCompletePage extends BasePage {

    // ########################## ACTIONS ##########################

    static verifyCompleteLogoIsDisplayed() {
      super.elementIsVisible(locators.COMPLETE_LOGO, 3000)
      
    }

    static verifyCompleteHeaderIsDisplayed() {
      cy.get(locators.COMPLETE_HEADER).should('contain.text', 'Thank you for your order!')
    }

    static verifyCompleteTextIsDisplayed() {
      cy.get(locators.COMPLETE_TEXT).should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
}

export default CheckoutCompletePage;