class homepage {
  elements = {
    Declinecookie: () => cy.get('[aria-label="close and deny"]'),
    EmailInputLine: () => cy.get('[data-e2e="EmailFormCtaForm"]'),
    TryForFreeBtn: () => cy.get('[type="submit"]'),
    CommentsRightArrow: () => cy.get('[aria-label="Next Item"]'),
    LeftDotComments: () => cy.get('[aria-label="Slide 1"]'),
    Comments: () => cy.get(".eZYKCX"),
    OomaStoryBtn: () => cy.get("[href*=ooma]"),
    OomaLinkText: () => cy.get('.fIjqZs [href*="www.ooma.com"]'),
  };
  DeclineCookieClick() {
    this.elements.Declinecookie().click();
  }

  EmailInputLineType() {
    this.elements.EmailInputLine().type("valddlav11@gmail.com");
  }
  TryForFreeBtnClick() {
    this.elements.TryForFreeBtn().click();
  }
  ScrollToComments() {
    this.elements.Comments().scrollIntoView();
  }
  ClickCommentsRightArrow() {
    this.elements.CommentsRightArrow().click();
  }
  ClickLeftDotComments() {
    this.elements.LeftDotComments().click();
  }
  ScrollToOomaStoryBtn() {
    this.elements.OomaStoryBtn().scrollIntoView();
  }
  ClickOomaStoryBtn() {
    this.elements.OomaStoryBtn().click();
  }
  ClickOnOomaLink() {
    this.elements.OomaLinkText().click();
  }
}
module.exports = new homepage();
