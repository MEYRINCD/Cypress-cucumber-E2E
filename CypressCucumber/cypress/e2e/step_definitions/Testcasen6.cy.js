import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../Pages/Homepage";

Given("A user opens the Homepage ", () => {
  cy.visit("https://telnyx.com/");
});
When("A user click on right arrow", () => {
  homepage.ScrollToComments();
  homepage.ClickCommentsRightArrow();
  cy.get(".fCiTXY:nth-child(2)").should("have.attr", "aria-hidden", "false");
});
When("A user Click on left dot", () => {
  homepage.ClickLeftDotComments();
});
Then("System shows you first comment", () => {
  cy.get(".fCiTXY:nth-child(1)").should("have.attr", "aria-hidden", "false");
});
