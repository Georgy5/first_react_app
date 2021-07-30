/* eslint-disable no-undef */
describe("User that visits app", () => {
  before(() => {
    cy.intercept("**/api/users", { fixture: "users_response.json" });
    cy.visit("/");
  });

  it('is expected to see "Hello World"', () => {
    cy.get("body").should("contain.text", "Hello World");
  });

  it('is expected to display information about 6 users', () => {
    cy.get('[data-cy=users-list]').children().should('have.length', 6);
  });

  it("is expected to contain the users Thomas and Mirsad", () => {
    cy.get("[data-cy=users-list]")
      .children()
      .first()
      .should("contain.text", "Thomas")
      .next()
      .should("contain.text", "Mirsad");
  });
});