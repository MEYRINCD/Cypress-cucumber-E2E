import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../Pages/Homepage";

Given("A user opens the Homepage", () => {
  cy.visit("https://telnyx.com/");
});
When("A user fill input line {string}", () => {
  homepage.DeclineCookieClick();
  homepage.EmailInputLineType();
});

When("A user click on Try for free button", () => {
  homepage.TryForFreeBtnClick();
});
Then("System redirects user to Sign up page", () => {
  cy.url().should(
    "eq",
    "https://telnyx.com/sign-up?email=valddlav11@gmail.com"
  );
});
