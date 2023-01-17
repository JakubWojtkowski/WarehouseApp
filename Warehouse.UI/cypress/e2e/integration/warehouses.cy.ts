describe('Warehouses page', () => {

  beforeEach(() =>{
    cy.visit('http://localhost:4200/login');
    cy.get('.col-lg-6 input#id').type('8');
    cy.get('.col-lg-6 input#email').type('cypressmail');
    cy.get('.col-lg-6 input#password').type('cypresspass');
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('.col-lg-6 button').contains('Submit').click();
  });

  it('It should show a list of warehouses', () => {

    cy.visit('http://localhost:4200/warehouses');
    cy.get('h1.mb-3').contains("Warehouses");
  });

});
