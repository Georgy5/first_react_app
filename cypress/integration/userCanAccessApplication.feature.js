/* eslint-disable no-undef */
describe("User that visits app", () => {
  before(() => {
    cy.visit("/");
  });

  it('is expected to see "Hello World"', () => {
    cy.get("body").should("contain.text", "Hello World");
  });
});