import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("A user click on Log in button in header", () => {
  header.ClickLogInBtn();
});
When("A user input {string} in Business input line", () => {
  header.TypeBusinessEmailInputLine();
});
When("A user input {string} in password input line", () => {
  header.TypePasswordInputLine();
});
When("A user click on Log in button", () => {
  header.ClickLogInConfirmBtn();
});
Then("System shows negative message", () => {
  cy.get(".cWfwZS").should("be.visible");
});
