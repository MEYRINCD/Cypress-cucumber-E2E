import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When("Click on Partners button in Company category", () => {
  header.ClickPartnersBtn();
  cy.url().should("eq", "https://telnyx.com/company/partnerships");
});
When("Check visibility of main title", () => {
  cy.get(".iNtgdk").should("be.visible");
});
When("Check visibility of Learn about our Network link text", () => {
  cy.get(".bEdiMc [href*=global-ip-network]").scrollIntoView();
  cy.get(".bEdiMc [href*=global-ip-network]").should("be.visible");
});
Then("Check visibility on of Grow with Telnyx block image", () => {
  cy.get(".hVKrfv [alt*=sms-customer-support]").should("be.visible");
});
