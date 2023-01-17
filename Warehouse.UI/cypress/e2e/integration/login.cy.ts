describe('Default login page', () => {

    // Checking if the user can sees the login page and form
    it('It should shows us a form', () => {
      cy.visit('http://localhost:4200/login');
      cy.get('div.col-lg-6 form');
    });

    // Attempting to login with the empty data
    it('It should return alert `empty data` after click on submit btn with empty data', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 button').contains('Submit').click();
      });;

      // Going to sign-up page with 'Register here' link
      it('It should go to register page', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 a').contains('Register here').click();
      });;

      // Checking if the user can fulfill the ID
      it('It should show a option to type a ID for User', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 input#id').type('7');
      })

       // Checking if the user can fulfill the email
      it('It should show a option to type a email for User', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 input#email').type('cypress');
      });

      // Checking if the user can fulfill the password
      it('It should show a option to type a password for User', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 input#password').type('cypress');
      })

      // username: Cypress, email: cypress, password: cypress, id: 07
      it('It should return alert `invalid data and invalid password next` eg. after click on submit btn with fulfill id and email properly for test user and with wrong password', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 input#id').type('7');
        cy.get('.col-lg-6 input#email').type('cypress');
        cy.get('.col-lg-6 input#password').type('wrong password');
        cy.get('.col-lg-6 button').contains('Submit').click();
        cy.get('.col-lg-6 button').contains('Submit').click();
      })

      // username: Cypress, email: cypress, password: cypress, id: 07
      it('It should return alert `invalid data and invalid email next` eg. after click on submit btn with fulfill id and password properly for test user and with wrong email', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 input#id').type('7');
        cy.get('.col-lg-6 input#email').type('wrong email');
        cy.get('.col-lg-6 input#password').type('cypress');
        cy.get('.col-lg-6 button').contains('Submit').click();
        cy.get('.col-lg-6 button').contains('Submit').click();
      })

      // log-in attempt, we are using Cypress user account for this test
      it('It should log-in successfully and it us shows alert and loads home page', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6 input#id').type('7');
        cy.get('.col-lg-6 input#email').type('cypress');
        cy.get('.col-lg-6 input#password').type('cypress');
        cy.get('.col-lg-6 button').contains('Submit').click();
        cy.get('.col-lg-6 button').contains('Submit').click();
      })

      // login.microsoftonline.com --> sign-in page
      it('It should show redirect to Microsoft log-in page', () => {
        cy.visit('http://localhost:4200/login');
        cy.get('.col-lg-6').contains('sign in with Microsoft account').click();
      })

});
