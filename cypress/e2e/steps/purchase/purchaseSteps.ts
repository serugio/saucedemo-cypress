import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../../pages/InventoryPage";
import ShoppingCartPage from "../../../pages/ShoppingCartPage";
import CheckoutPage from "../../../pages/CheckoutPage";
import OverviewPage from "../../../pages/OverviewPage";
import CheckoutCompletePage from "../../../pages/CheckoutCompletePage";


When("user add sauce lab backpack to cart", () => {
  InventoryPage.clickAddToCartSauceLabsBackpack()
});

When("shopping cart icon should have number one badge", () => {
  InventoryPage.shoppingCartIconBadgeShouldExists()
});

When("lab backpack remove button should exist", () => {
  InventoryPage.sauceLabsBackpackRemoveButtonShouldExists()
});

When("user click shopping cart icon", () => {
  InventoryPage.clickShoppingCartIcon()
});

When("shoping cart has sauce lab backpack in inventory", () => {
  ShoppingCartPage.sauceLabsBackpackRemoveButtonShouldExists()
  ShoppingCartPage.verifySauceLabBackpackPriceExist()
  ShoppingCartPage.verifySauceLabBackpackTitleExist()
});

When("user click checkout button", () => {
  ShoppingCartPage.clickCheckoutButton()
});

When("user fill delivery information", () => {
  CheckoutPage.typeFirstName()
  CheckoutPage.typeLastName()
  CheckoutPage.typeZipCode()
});

When("user click continue button", () => {
  CheckoutPage.clickContinueButton()
});

When("overview page is displays product, payment, shipping and price info", () => {
  OverviewPage.verifySauceLabBackpackTitleExist()
  OverviewPage.verifySauceLabBackpackPriceExist()
  OverviewPage.verifyPaymentInformationTitleExist()
  OverviewPage.verifyPaymentInformationDescriptionExist()
  OverviewPage.verifyShippingInformationTitleExist()
  OverviewPage.verifyShippingInformationDescriptionExist()
  OverviewPage.verifyPriceTotalTitleExist()
  OverviewPage.verifyItemTotalExist()
  OverviewPage.verifyTaxExist()
  OverviewPage.verifyTotalPriceExist()
});

When("user click Finish button", () => {
  OverviewPage.clickFinishButton()
});

When("checkout complete page is displayed", () => {
  CheckoutCompletePage.verifyCompleteLogoIsDisplayed()
  CheckoutCompletePage.verifyCompleteHeaderIsDisplayed()
  CheckoutCompletePage.verifyCompleteTextIsDisplayed()
});










