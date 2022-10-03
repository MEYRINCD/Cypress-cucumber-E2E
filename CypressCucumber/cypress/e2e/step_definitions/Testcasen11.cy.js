import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("Click on Bring your own career button in Resources category", () => {
  header.ClickBringYourOwnCareerBtn();
});
When("Click on Try it for Free button", () => {
  header.ClickTryItForFreeBringYour();
});
Then("System redirects you to sign up page ", () => {
  cy.url().should("eq", "https://telnyx.com/sign-up");
});
