import BasePage from './BasePage';

const locators = {
    ADD_TO_CART_SAUCE_LABS_BACKPACK : '[id=add-to-cart-sauce-labs-backpack]',
    REMOVE_SAUCE_LABS_BACKPACK : '[id=remove-sauce-labs-backpack]',
    SHOPPING_CART_BADGE : '[class=shopping_cart_badge]',
    PRICE_CLASS : '[class=inventory_item_price]',
    PRODUCT_NAME_CLASS : '[class=inventory_item_name]',
    SHOPPING_CART_ICON : '[class=shopping_cart_link]'
    
}

class InventoryPage extends BasePage {

    // ########################## ACTIONS ##########################

  static clickAddToCartSauceLabsBackpack() {
    super.clickElement(locators.ADD_TO_CART_SAUCE_LABS_BACKPACK)
  }

  static shoppingCartIconBadgeShouldExists() {
    super.elementIsVisible(locators.SHOPPING_CART_BADGE, 3000)
  }
  
  static sauceLabsBackpackRemoveButtonShouldExists() {
    super.elementIsVisible(locators.REMOVE_SAUCE_LABS_BACKPACK, 3000)
  }

  static clickShoppingCartIcon() {
    super.clickElement(locators.SHOPPING_CART_ICON)
  }

  

  

}

export default InventoryPage;