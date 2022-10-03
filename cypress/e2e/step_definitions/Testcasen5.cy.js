import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("A user opens the Homepage 2", () => {
  cy.visit("https://telnyx.com/");
});
When("Check visibility of LinkedIn button", () => {
  cy.get('[href="https://www.linkedin.com/company/telnyx/"]').scrollIntoView();
  cy.get('[href="https://www.linkedin.com/company/telnyx/"]').should(
    "be.visible"
  );
});
When("Check visibility of Twitter button", () => {
  cy.get('[href="https://twitter.com/telnyx"]').should("be.visible");
});
Then("Check visibility of Facebook button", () => {
  cy.get('[href="https://www.facebook.com/Telnyx/"]').should("be.visible");
});
