describe("trigger functionlity", () => {
  it("should be able to trigger mouseover functionality", () => {
    cy.visit("https://parabank.parasoft.com/parabank");
    cy.get(".leftmenu > :nth-child(6) > a").trigger("mouseover");
    // cy.get(".leftmenu > :nth-child(6) > a").invoke("show");
    cy.get(".leftmenu > :nth-child(6) > a").click({ force: true });
    cy.get(':nth-child(1) > [name="action"]').click({ force: true });
  });
});
