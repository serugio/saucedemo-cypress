import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/LoginPage"

Given("User visits saucelabs page", () => {
    cy.visit("/", {failOnStatusCode: false});
  });

  When("user makes login with standardUser", () => {
    cy.get('@testData').then((data: any) => {
      LoginPage.typeOnUsername(data.username);
      LoginPage.typeOnPassword(data.password);
      LoginPage.clickLoginButton();
    })
  });  


  
