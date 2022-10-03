import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("User click on Support-center button in header", () => {
  header.SupportCenterBtnClick();
});
When("User click on Getting Started button", () => {
  header.GettingStartedBlogClick();
});
Then("System redirects you to Getting started page", () => {
  cy.url().should(
    "eq",
    "https://support.telnyx.com/en/collections/133094-getting-started"
  );
});
