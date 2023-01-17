import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { Delivery } from '../../../../models/Delivery-model';
import { Warehouse } from '../../../../models/Warehouse-model';
import { DeliveriesService } from '../../../../services/Deliveries/deliveries.service';
import { WarehousesService } from '../../../../services/Warehouses/warehouses.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

  addDeliveryRequest: Delivery = {
    id: '',
    dateOfDelivery: new Date(),
    deliveryMass: 0,
    warehouseId: 0,
    placementTime: 0,
    receiveTime: 0
  };

  warehouses: Warehouse[] = [];

  constructor(private deliveriesService: DeliveriesService, private warehouseService: WarehousesService, private router: Router) {}

  // I need to store warehouses because of its inhibitations
  ngOnInit(): void {
    this.warehouseService.getAllWarehouses()
    .subscribe({
      next: (warehouses) => {
        this.warehouses = warehouses;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  addDelivery() {
    let flag = false;

    // Warehouse ID checking if there is already existing Warehouse with that ID - for loop
  for(let warehouse of this.warehouses) {
      if(this.addDeliveryRequest.warehouseId.toString() == warehouse.id && warehouse.active == 'false') {
      {
        window.alert(`Given Warehouse(${warehouse.name}) is not available now.`);
        flag = !flag;
      }
    }
  }

    // Data validation part checking and making call to service if its properly registered
    if(!flag){
    if(this.addDeliveryRequest.deliveryMass <= 0 || this.addDeliveryRequest.warehouseId <= 0 || this.addDeliveryRequest.placementTime <= 0 || this.addDeliveryRequest.receiveTime <= 0)
    {
      alert('Please add valid data.');
    }
    //else if( (this.deliveriesService.checkWarehouseID(this.addDeliveryRequest)))
     // alert('Given Warehouse ID does not exist or is not available');
    else
    {
      this.deliveriesService.addDelivery(this.addDeliveryRequest).subscribe({
        next: (delivery) => {
          this.router.navigate(['deliveries']);
        }, error: (response) => {
          console.log(response);
          window.alert("Warehouse ID does not exist or is not available.")
        }
      });
    }
  }
 }

  goBack(){
    this.router.navigate(['deliveries']);
  }
}
