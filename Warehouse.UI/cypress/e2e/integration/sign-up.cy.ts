describe('Default login page', () => {

  // Checking if the user can sees the login page and form
  it('It should shows us a form', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('form');
  });

  it('It should be able to return back to the login page', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('a#login').contains('Login here').click();
  });

  // Attempt User sign-up with ID which already exsiting
  it('It should return alert `There is existing User with given ID` ', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('select').select('Warehouse manager');
    cy.get('input#id').type('7');
    cy.get('input#userName').type('User name');
    cy.get('input#tel').type('123456789');
    cy.get('input#email').type('cypres@mail.com');
    cy.get('input#password').type('cypresspassword');
    cy.get('input#passwordConfirm').type('cypresspassword');
    cy.get('button').contains('Submit').click();
  })

  // Attempt User sign-up with wrong phone number
  it('It should return alert `Please provide a proper telephone number`. Phone number length shorter than 9 for example 8 ', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('select').select('Warehouse manager');
    cy.get('input#id').type('9');
    cy.get('input#userName').type('User name');
    cy.get('input#tel').type('1234567'); // invalid phone number
    cy.get('input#email').type('cypres@mail.com');
    cy.get('input#password').type('cypresspassword');
    cy.get('input#passwordConfirm').type('cypresspassword');
    cy.get('button').contains('Submit').click();
  });

  // Attempt User sign-up with the one empty field eg. 'Type of manager' is empty
  it('It should return alert `Please provide a data in empty field.` Type of manager field is empty.', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('select'); // empty 'Type of manager' field cause we didn't select any option
    cy.get('input#id').type('9');
    cy.get('input#userName').type('User name');
    cy.get('input#tel').type('123456789');
    cy.get('input#email').type('cypres@mail.com');
    cy.get('input#password').type('cypresspassword');
    cy.get('input#passwordConfirm').type('cypresspassword');
    cy.get('button').contains('Submit').click();
  });

  // Attempt User sign-up with the different password. Password is different from comfirmed password.
  it('It should return alert `The confirmed password is not the same as the current password!` ', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('select').select('Warehouse manager');
    cy.get('input#id').type('9');
    cy.get('input#userName').type('User name');
    cy.get('input#tel').type('123456789');
    cy.get('input#email').type('cypres@mail.com');
    cy.get('input#password').type('cypresspassword');
    cy.get('input#passwordConfirm').type('cypresspasswor'); // confirmed password is not the same as the password
    cy.get('button').contains('Submit').click();
  });

  /*
   // Attempt User sign-up with proper data
   it('It should add User and return alert `User added successfully.` Next it should return back to login page and try log-in with new User account.', () => {
    cy.visit('http://localhost:4200/register');
    cy.get('select').select('Warehouse manager');
    cy.get('input#id').type('9');
    cy.get('input#userName').type('User name');
    cy.get('input#tel').type('123456789');
    cy.get('input#email').type('cypress@mail.com');
    cy.get('input#password').type('cypresspassword');
    cy.get('input#passwordConfirm').type('cypresspassword');
    cy.get('button').contains('Submit').click();

    cy.get('.col-lg-6 input#id').type('9');
    cy.get('.col-lg-6 input#email').type('cypress@mail.com');
    cy.get('.col-lg-6 input#password').type('cypresspassword');
    cy.get('.col-lg-6 button').contains('Submit').click();
    cy.get('.col-lg-6 button').contains('Submit').click();
  });
*/
});
