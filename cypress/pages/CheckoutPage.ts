import BasePage from './BasePage';
import { faker } from '@faker-js/faker';

const locators = {
    FIRST_NAME_INPUT : '[id=first-name]',
    LAST_NAME_INPUT : '[id=last-name]',
    ZIP_CODE_INPUT : '[id=postal-code]',
    CONTINUE_BUTTON : '[id=continue]',
  }

class CheckoutPage extends BasePage {

    // ########################## ACTIONS ##########################

  static typeFirstName() {
    super.typeOnInputField(faker.name.firstName(), locators.FIRST_NAME_INPUT)
  }

  static typeLastName() {
    super.typeOnInputField(faker.name.lastName(), locators.LAST_NAME_INPUT)
  }
  
  static typeZipCode() {
    super.typeOnInputField(faker.address.zipCode(), locators.ZIP_CODE_INPUT)
  }

  static clickContinueButton() {
    super.clickElement(locators.CONTINUE_BUTTON)
  }
}

export default CheckoutPage;