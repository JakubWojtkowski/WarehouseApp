describe('Log-out page', () => {

  // Checking if the user can sees the login page and form
  it('It should shows us a page Log-out included two buttons YES and NO', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('.col-lg-6 input#id').type('7');
    cy.get('.col-lg-6 input#email').type('cypress');
    cy.get('.col-lg-6 input#password').type('cypress');
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('a#logout').click();
    cy.get('button#yes').contains('Yes');
    cy.get('button#no').contains('No');
  });

  it('It should be able to go back to the home page if we click option NO', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('.col-lg-6 input#id').type('7');
    cy.get('.col-lg-6 input#email').type('cypress');
    cy.get('.col-lg-6 input#password').type('cypress');
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('a#logout').click();
    cy.get('button#no');
  });

  it('It should log-out the User, shows us the alert and return back to the login page if we click option YES', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('.col-lg-6 input#id').type('7');
    cy.get('.col-lg-6 input#email').type('cypress');
    cy.get('.col-lg-6 input#password').type('cypress');
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('a#logout').click();
    cy.get('button#yes').click();
  });


});
