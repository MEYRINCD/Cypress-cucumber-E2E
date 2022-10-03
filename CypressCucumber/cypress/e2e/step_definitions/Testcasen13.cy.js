import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("Click on Blog button in Resources category", () => {
  header.ClickBlogBtn();
});
When("Search “API” and click enter", () => {
  header.TypeBlogInputLine();
  header.ClickEnterBlogInputLine();
});
Then("Check visibility of “Search result” text", () => {
  cy.get(".kWhBMu").should("be.visible");
});
