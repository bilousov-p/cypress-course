describe('Various examples', () => {
  beforeEach(() => {
    cy.visit('/examples');
  });

  it('Multy-page testing', () => {
    cy.getDataTest('nav-why-cypress').click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest('nav-overview').click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest('nav-fundamentals').click();
    cy.location("pathname").should("equal", "/fundamentals");
  });

  it('Intercept testing', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
        fixture: 'example.json'
    });

    cy.getDataTest("post-button").click();
  });
});
