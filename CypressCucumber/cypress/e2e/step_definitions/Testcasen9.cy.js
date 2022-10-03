import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("Click on Call tracking button in Solutions category", () => {
  header.ClickCallTrackingBtn();
});
When("Check visibility of Call tracking title", () => {
  cy.get(".jJeNul").should("be.visible");
});
When("Check visibility of Call tracking image", () => {
  cy.get('[alt="__Call Tracking__"]').should("be.visible");
});
When("Check visibility one of how it works block title", () => {
  cy.get(".knQTTI:nth-child(2) .kpXaqz").scrollIntoView();
  cy.get(".knQTTI:nth-child(2) .kpXaqz").should("be.visible");
});
Then("Check visibility one of how it works block image", () => {
  cy.get('[src*="teaser_automated-porting_3x.png"]').should("be.visible");
});
