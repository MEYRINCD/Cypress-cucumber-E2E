import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("A user click on global numbers button in Products category", () => {
  header.ClickGlobalNumbersBtn();
  cy.url().should("eq", "https://telnyx.com/products/phone-numbers");
});
When("A user click on Claim your Free Testing Credit", () => {
  header.ClickFreeTestingCreditGN();
});
Then("System redirects user to sign-up page", () => {
  cy.url().should("eq", "https://telnyx.com/sign-up");
});
