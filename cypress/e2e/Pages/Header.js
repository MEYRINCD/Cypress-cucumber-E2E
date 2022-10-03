class header {
  elements = {
    NetworkBtn: () => cy.get(".gdETaM [href*=global-ip-network]"),
    TryOutNetworkBtn: () => cy.get('.eIBIJq [href="/sign-up"]'),
    SupportCenterBtn: () => cy.get(".frufKM:nth-child(3)"),
    GettingStartedBlog: () => cy.get('[href*="133094-getting-started"]'),
    ProductsCategory: () => cy.get(".hhCIhu:nth-child(3) .khahzD:nth-child(1)"),
    GlobalNumbersBtn: () => cy.get(".ctVOEX [href*=phone-numbers]"),
    FreeTestingCreditGN: () => cy.get('.jnwLUb [href="/sign-up"]'),
    CallTrackingBtn: () => cy.get(".ctVOEX [href*=call-tracking]"),
    CustomerEngagementBtn: () =>
      cy.get("[href*=customer-engagement-platforms]"),
    ScheduleCallBtn: () => cy.get('.gubGRL [href="/contact-us"]'),
    BringYourOwnCareerBtn: () => cy.get('[href="/bring-your-own-carrier"]'),
    TryItForFreeBringYour: () => cy.get('.iDgrXI [href="/sign-up"]'),
    PartnersBtn: () => cy.get('[href="/company/partnerships"]'),
    BlogBtn: () => cy.get('.iWLbyI [href="/resources"]'),
    BlogInputLine: () => cy.get("#search"),
    CallUsBtn: () => cy.get(".bJzgmA"),
    LogInBtn: () => cy.get(".blLdCs:nth-child(4)"),
    BusinessEmailInputLine: () => cy.get('.fCOoik [name="email"]'),
    PasswordInputLine: () => cy.get('.fCOoik [name="password"]'),
    LogInConfirmBtn: () => cy.get(".eazkBi"),
  };
  NetworkBtnClick() {
    this.elements.NetworkBtn().click();
  }
  TryOutNetworkBtnClick() {
    this.elements.TryOutNetworkBtn().click();
  }
  SupportCenterBtnClick() {
    this.elements.SupportCenterBtn().click();
  }
  GettingStartedBlogClick() {
    this.elements.GettingStartedBlog().click();
  }
  ClickGlobalNumbersBtn() {
    this.elements.GlobalNumbersBtn().click({ force: true });
  }
  ClickFreeTestingCreditGN() {
    this.elements.FreeTestingCreditGN().click();
  }
  ClickCallTrackingBtn() {
    this.elements.CallTrackingBtn().click({ force: true });
  }
  ClickCustomerEngagementBtn() {
    this.elements.CustomerEngagementBtn().click({ force: true });
  }
  ScrollToScheduleCallBtn() {
    this.elements.ScheduleCallBtn().scrollIntoView();
  }
  ClickScheduleCallBtn() {
    this.elements.ScheduleCallBtn().click();
  }
  ClickBringYourOwnCareerBtn() {
    this.elements.BringYourOwnCareerBtn().click({ force: true });
  }
  ClickTryItForFreeBringYour() {
    this.elements.TryItForFreeBringYour().click();
  }
  ClickPartnersBtn() {
    this.elements.PartnersBtn().click({ force: true });
  }
  ClickBlogBtn() {
    this.elements.BlogBtn().click({ force: true });
  }
  TypeBlogInputLine() {
    this.elements.BlogInputLine().type("API");
  }
  ClickEnterBlogInputLine() {
    this.elements.BlogInputLine().type("{enter}");
  }
  ClickCallUsBtn() {
    this.elements.CallUsBtn().click();
  }
  ClickLogInBtn() {
    this.elements.LogInBtn().click();
  }
  TypeBusinessEmailInputLine() {
    this.elements.BusinessEmailInputLine().type('"adgadgadg@gmail.com"');
  }
  TypePasswordInputLine() {
    this.elements.PasswordInputLine().type('"rscdaadafadafaf"');
  }
  ClickLogInConfirmBtn() {
    this.elements.LogInConfirmBtn().click();
  }
}
module.exports = new header();
