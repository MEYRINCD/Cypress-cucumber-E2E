import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../Pages/Homepage";
import header from "../Pages/Header";

Given("A user opens the Homepage 1", () => {
  cy.visit("https://telnyx.com/");
});
When("A user click on Network button in header", () => {
  homepage.DeclineCookieClick();
  header.NetworkBtnClick();
});
When("A user click on Try Our Network button", () => {
  header.TryOutNetworkBtnClick();
});
Then("System redirects you to sign up page", () => {
  cy.url().should("eq", "https://telnyx.com/sign-up");
});
