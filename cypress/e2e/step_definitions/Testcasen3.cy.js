import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("Check visibility of Products category", () => {
  cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(1)").should("be.visible");
});
When("Check visibility of Solutions category", () => {
  cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(3)").should("be.visible");
});
When("Check visibility of Network button", () => {
  cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(5)").should("be.visible");
});
When("Check visibility of Resources category", () => {
  cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(6)").should("be.visible");
});
When("Check visibility of Company category", () => {
  cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(8)").should("be.visible");
});
Then("Check visibility of Pricing category", () => {
  cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(10)").should("be.visible");
});
