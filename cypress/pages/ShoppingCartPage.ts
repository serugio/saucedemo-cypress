import BasePage from './BasePage';

const locators = {
    SAUCE_LABS_BACKPACK_TITLE : '[id=item_4_title_link] > [class=inventory_item_name]',
    SAUCE_LABS_BACKPACK_PRICE : '[class=item_pricebar] > [class=inventory_item_price]',
    CONTINUE_SHOPPING : '[id=continue-shopping]',
    REMOVE_SAUCE_LABS_BACKPACK : '[id=remove-sauce-labs-backpack]',
    CHECKOUT_BUTTON : '[id=checkout]'
}

class ShoppingCartPage extends BasePage {

    // ########################## ACTIONS ##########################

  static verifySauceLabBackpackTitleExist() {
    cy.get(locators.SAUCE_LABS_BACKPACK_TITLE).should('be.visible')
  }

  static verifySauceLabBackpackPriceExist() {
    cy.get(locators.SAUCE_LABS_BACKPACK_PRICE).should('be.visible')
  }

  static clickShoppingCartIconExist() {
    super.clickElement(locators.CONTINUE_SHOPPING)
  }

  static sauceLabsBackpackRemoveButtonShouldExists() {
    super.elementIsVisible(locators.REMOVE_SAUCE_LABS_BACKPACK, 3000)
  }

  static clickCheckoutButton() {
    super.clickElement(locators.CHECKOUT_BUTTON)
  }
}

export default ShoppingCartPage;