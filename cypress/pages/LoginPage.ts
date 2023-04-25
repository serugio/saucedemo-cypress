import BasePage from './BasePage';

const locators = {
    USER_NAME : '[id=user-name]',
    PASSWORD : '[id=password]',
    LOGIN_BUTTON : '[id=login-button]'
}

class LoginPage extends BasePage {

    // ########################## ACTIONS ##########################

  static clickUsername() {
    super.clickElement(locators.USER_NAME);
  }

  static clickPassword() {
    super.clickElement(locators.PASSWORD);
  }

  static clickLoginButton() {
    super.clickElement(locators.LOGIN_BUTTON);
  }

  static typeOnUsername(data: string) {
    super.typeOnInputField(data, locators.USER_NAME);
  }

  static typeOnPassword(data: string) {
    super.typeOnInputField(data, locators.PASSWORD);
  }

}

export default LoginPage;