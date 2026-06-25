describe("mouseover eventes with plugin", () => {
  it("should be able to hover over the elment with realhover event", () => {
    cy.visit("https://parabank.parasoft.com/parabank");
    cy.get(".leftmenu > :nth-child(6) > a").realClick();
    cy.get(".leftmenu > :nth-child(6) > a").realHover();
  });
});
