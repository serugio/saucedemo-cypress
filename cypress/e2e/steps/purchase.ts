import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit saucelabs page", () => {
  cy.visit("/");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );

  assert.deepEqual({}, {});
});