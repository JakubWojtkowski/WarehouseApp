describe('Deliveries page', () => {

    it('It should show a form for delivery adding', () => {
      cy.visit('http://localhost:4200/deliveries/add');
      cy.contains("Add New Delivery");
    });

      it('It should show a form', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('form');
      });

      it('It should show that button save works(by click)', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('form').contains("Save").click();
      });

      it('It should show a option to type a date for new Delivery', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #date').click();
      })

      it('It should show a option to type a delivery mass for new Delivery', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #deliveryMass');
      });

      it('It should show a option to type a warehouse ID for new Delivery', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #warId');
      })

      it('It should show a option to type a placement time for new  Delivery', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #placementTime');
      })

      it('It should show a option to type a receive time for new Delivery', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #receiveTime');
      })

      it('User should be able to fill up and save new Delivery', () => {
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #date').type('2022-12-12');
        cy.get('div.mb-3 #deliveryMass').type('600');
        cy.get('div.mb-3 #warId').type('5');
        cy.get('div.mb-3 #placementTime').type('7');
        cy.get('div.mb-3 #receiveTime').type('8');
        cy.get('form').submit();
      })

      it('It should return an alert if we try add empty data to our db', () => {
        // let's leave only the delivery mass empty or zero value
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #date').type('2022-12-12');
        cy.get('div.mb-3 #deliveryMass').type('0');
        cy.get('div.mb-3 #warId').type('5');;
        cy.get('div.mb-3 #placementTime').type('7');
        cy.get('div.mb-3 #receiveTime').type('8');
        cy.get('form').submit();
      })

      it('It should return an error with method post if we try add new delivery with wrong warehouse ID', () => {
        // let's leave only the delivery mass empty or zero value
        cy.visit('http://localhost:4200/deliveries/add');
        cy.get('div.mb-3 #date').type('2022-12-12');
        cy.get('div.mb-3 #deliveryMass').type('100');
        cy.get('div.mb-3 #warId').type('2');;
        cy.get('div.mb-3 #placementTime').type('7');
        cy.get('div.mb-3 #receiveTime').type('8');
        cy.get('form').submit();
      })

    });
