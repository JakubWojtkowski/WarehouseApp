describe('Deliveries page', () => {
    it('It should show a list of deliveries', () => {
      cy.visit('http://localhost:4200/deliveries');
      cy.get('h1.mb-3').contains("Deliveries");
    });
  })
