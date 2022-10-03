import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("Click on Call us button", () => {
  header.ClickCallUsBtn();
});
Then("Check phone image on visibility", () => {
  cy.get('[stroke="#1D2241"]').should("be.visible");
});
