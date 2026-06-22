import { click } from "@testing-library/user-event/dist/click";

describe("Regestration functionality", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank");
  });

  it("should be able to see the error message when try to recreate the same user", () => {
    cy.get("#loginPanel > :nth-child(3) > a").click();
    cy.get('input[id="customer.firstName"]').type("sherpa");
    cy.get('input[id="customer.lastName"]').type("sherpa");
    cy.get('input[id="customer.address.street"]').type("ktm");
    cy.get('input[id="customer.address.city"]').type("ktm");
    cy.get('input[id="customer.address.state"]').type("ktm");
    cy.get('input[id="customer.address.zipCode"]').type("111");
    cy.get('input[id="customer.phoneNumber"]').type("111");
    cy.get('input[id="customer.ssn"]').type(1111);
    cy.get('input[id="customer.username"]').type("sherpa");
    cy.get('input[id="customer.password"]').type(111);
    cy.get("#repeatedPassword").type(111);
    cy.get('[colspan="2"] > .button').click();
    cy.get("span[id='customer.username.errors']").should(
      "have.text",
      "This username already exists.",
    );
  });
});
