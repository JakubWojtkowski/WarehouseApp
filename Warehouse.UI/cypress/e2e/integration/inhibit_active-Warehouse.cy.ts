describe('Inhibit and then active Warehouse', () => {

  // Checking if the user can sees button to Inhibit a Warehouse
  it('It should shows us a default button to inhibite a Warehouse', () => {
    cy.visit('http://localhost:4200/warehouses');
    cy.get('a#inhibit');
  });

  it('It should be able to successfully inhibit a Warehouse', () => {
    cy.visit('http://localhost:4200/warehouses');
    cy.get('a[id="inhibit"]').first().click().get('button[class="btn btn-success"]').click();
  });

  it('It should be able to successfully active again a Warehouse', () => {
    cy.visit('http://localhost:4200/warehouses');
    cy.get('a[id="active"]').first().click().get('button[class="btn btn-success"]').click();
  })

});
