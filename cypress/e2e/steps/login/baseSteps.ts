import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  //testData
  cy.fixture('../fixtures/data.json').as('testData');
})