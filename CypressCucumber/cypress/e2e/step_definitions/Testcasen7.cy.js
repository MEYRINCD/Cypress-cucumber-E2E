import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../Pages/Homepage";

Given("A user opens the Homepage  ", () => {
  cy.visit("https://telnyx.com/");
});
When("A user click on Read Ooma customer story", () => {
  homepage.ScrollToOomaStoryBtn();
  homepage.ClickOomaStoryBtn();
  cy.url().should("eq", "https://telnyx.com/customer-stories/ooma");
});
When("A user Click on Ooma link text", () => {
  homepage.ClickOnOomaLink();
});
Then("System open new Ooma page", () => {
  cy.get('.fIjqZs [href*="www.ooma.com"]').should("be.visible");
});
