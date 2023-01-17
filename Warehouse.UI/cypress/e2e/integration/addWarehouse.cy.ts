describe('Warehouses page', () => {

    it('It should show a form for warehouse adding', () => {
    cy.visit('http://localhost:4200/warehouses/add');
    cy.contains("Add New Warehouse");
    });

    it('It should show a form', () => {
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('form');
    });

    it('It should show that button save works(by click)', () => {
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('form').contains("Save").click();
    });

    it('It should show a option to type a Name for new Warehouse', () => {
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('div.mb-3 #name');
    })

    it('It should show a option to type a Address for new Warehouse', () => {
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('div.mb-3 #address');
    });

    it('It should show a option to type a Co-ordinates for new Warehouse', () => {
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('div.mb-3 #coordinates');
    })

    it('User should be able to fill up and save the new Warehouse', () => {
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('div.mb-3 #name').type('Porto');
      cy.get('div.mb-3 #address').type('Rua da Santa Maria');
      cy.get('div.mb-3 #coordinates').type("54'2 N 57'6 W");
      cy.get('form').submit();
    })


    it('It should return an alert if we try add empty data to our db', () => {
      // let's leave only the name field empty
      cy.visit('http://localhost:4200/warehouses/add');
      cy.get('div.mb-3 #name');
      cy.get('div.mb-3 #address').type('Rua da Santa Maria');
      cy.get('div.mb-3 #coordinates').type("54'2 N 57'6 W");
      cy.get('form').submit();
    })


  });
