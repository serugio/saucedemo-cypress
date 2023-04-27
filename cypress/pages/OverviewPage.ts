import BasePage from './BasePage';
import { faker } from '@faker-js/faker';

const locators = {
    SAUCE_LAB_BACKPACK_TITLE : '[id=item_4_title_link]',
    SAUCE_LAB_BACKPACK_PRICE : '[class=item_pricebar] > [class=inventory_item_price]',
    PAYMENT_INFORMATION_TITLE : '.summary_info > div:nth-child(1)',
    PAYMENT_INFORMATION_DESCRIPTION : '.summary_info > div:nth-child(2)',
    SHIPPING_INFORMATION_TITLE : '.summary_info > div:nth-child(3)',
    SHIPPING_INFORMATION_DESCRIPTION : '.summary_info > div:nth-child(4)',
    PRICE_TOTAL_TITLE : '.summary_info > div:nth-child(5)',
    ITEM_TOTAL : '.summary_info > div:nth-child(6)',
    TAX : '.summary_info > div:nth-child(2)',
    TOTAL_PRICE : '.summary_info > div:nth-child(8)',
    FINISH_BUTTON : '[id=finish]',
    


  }

class OverviewPage extends BasePage {

    // ########################## ACTIONS ##########################

    static verifySauceLabBackpackTitleExist() {
      cy.get(locators.SAUCE_LAB_BACKPACK_TITLE).should('contain.text', 'Sauce Labs Backpack')
    }

    static verifySauceLabBackpackPriceExist() {
      super.elementIsVisible(locators.SAUCE_LAB_BACKPACK_PRICE, 3000)
    }

    static verifyPaymentInformationTitleExist() {
      cy.get(locators.PAYMENT_INFORMATION_TITLE).should('contain.text', 'Payment Information')
    }
    
    static verifyPaymentInformationDescriptionExist() {
      super.elementIsVisible(locators.PAYMENT_INFORMATION_DESCRIPTION, 3000)
    }
    
    static verifyShippingInformationTitleExist() {
      cy.get(locators.SHIPPING_INFORMATION_TITLE).should('contain.text', 'Shipping Information')
    }
    
    static verifyShippingInformationDescriptionExist() {
      super.elementIsVisible(locators.SHIPPING_INFORMATION_DESCRIPTION, 3000)
    }
    
    static verifyPriceTotalTitleExist() {
      cy.get(locators.PRICE_TOTAL_TITLE).should('contain.text', 'Price Total')
    }
    
    static verifyItemTotalExist() {
      super.elementIsVisible(locators.ITEM_TOTAL, 3000)
    }
    
    static verifyTaxExist() {
      super.elementIsVisible(locators.TAX, 3000)
    }
    
    static verifyTotalPriceExist() {
      super.elementIsVisible(locators.TOTAL_PRICE, 3000)
    }

  static clickFinishButton() {
    super.clickElement(locators.FINISH_BUTTON)
  }
}

export default OverviewPage;