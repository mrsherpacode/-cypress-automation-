import { click } from "@testing-library/user-event/dist/click";

describe("Regestration functionality", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank");
  });

  it("should be able to enter all the details and submit the form", () => {
    cy.get("#loginPanel > :nth-child(2) > a").click();
    cy.get('input[id= "firstName"]').type("sherpa");
    cy.get('input[id= "lastName"]').type("sherpa");
    cy.get('input[id= "address.street"]').type("ktm");
    cy.get('input[id= "address.city"]').type("ktm");
    cy.get('input[id= "address.state"]').type("ktm");
    cy.get('input[id= "address.zipCode"]').type("111");
    cy.get('input[id= "ssn"]').type(111);
    cy.get('[colspan="2"] > .button').click();
  });
});
