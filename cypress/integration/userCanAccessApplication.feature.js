/* eslint-disable no-undef */
describe("User that visits app", () => {
  before(() => {
    cy.visit("/");
  });

  it('is expected to see "Hello World"', () => {
    cy.get("body").should("contain.text", "Hello World");
  });

  it('is expected to display information about 6 users', () => {
    cy.get('[data-cy=users-list]').children.should('have.length', 6);
  });
});