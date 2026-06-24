describe("checkbox functionality", () => {
  it("should be able to check the redio button elements", () => {
    cy.visit("https://parabank.parasoft.com/parabank");
    cy.get("#headerPanel > ul.leftmenu > li:nth-child(6) > a").click();
    cy.get("#adminForm > table.form  input[type='radio']").check([
      "restxml",
      "soap",
      "restjson",
    ]);
  });
});
