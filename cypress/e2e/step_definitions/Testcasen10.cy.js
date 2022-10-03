import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import header from "../Pages/Header";

Given("A user opens the Homepage 1 ", () => {
  cy.visit("https://telnyx.com/");
});
When(
  "Click on Customer Engagement platforms button at Solutions category",
  () => {
    header.ClickCustomerEngagementBtn();
    cy.url().should(
      "eq",
      "https://telnyx.com/solutions/customer-engagement-platforms"
    );
  }
);
When("Check visibility of Page title", () => {
  cy.get(".jJeNul").should("be.visible");
});
When("Check visibility of Top image", () => {
  cy.get('[alt="Customer Engagement Platforms "]').should("be.visible");
});
When("Click Schedule a call with our experts", () => {
  header.ScrollToScheduleCallBtn();
  header.ClickScheduleCallBtn();
});
Then("System redirects you to contact us page", () => {
  cy.url().should("eq", "https://telnyx.com/contact-us");
});
