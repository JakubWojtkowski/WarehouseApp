describe('Home page', () => {

  // Checking if the home page is loaded and if we can go to the next pages
  it('It should show us the home page with two buttons  like Warehouses&Deliveries and Trucks&Paths', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('button#warehouses');
    cy.get('button#trucks');
    //cy.get('button#trucks').click();
  });

  it('It should be able to go to the Warehouses&Deliveries page part', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('button#warehouses').click();
  });

  it('It should be able to go to the Trucks&Paths page part', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('button#trucks').click();
  });

});
