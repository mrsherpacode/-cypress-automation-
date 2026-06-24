describe("scroll functionality", () => {
  it("should be able to scroll to diffirent positons ", () => {
    cy.visit("https://parabank.parasoft.com/parabank");
    cy.scrollTo("bottom");
    cy.scrollTo("bottom", { duration: 1000 });
    cy.scrollTo(0, 500);
  });
});
