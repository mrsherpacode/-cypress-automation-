import { click } from "@testing-library/user-event/dist/click";

describe("login functionality", () => {
  beforeEach(() => {
    cy.visit("https://parabank.parasoft.com/parabank");
  });

  it("should be able to login and see the account details and select the month", () => {
    cy.get("#loginPanel > form > div:nth-child(2) > input").type("sherpa");
    cy.get("#loginPanel > form > div:nth-child(4) > input").type(111);
    cy.get("#loginPanel > form > div:nth-child(5) > input").click();
    cy.get(
      "#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a",
    ).click();
    cy.get("#month").select(5);
    // cy.get("#month").select("March");
    // cy.get("#month").select(6);
  });
});
