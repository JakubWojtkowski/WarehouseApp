import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from '../../../../models/Warehouse-model';
import { WarehousesService } from '../../../../services/Warehouses/warehouses.service';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  addWarehouseRequest: Warehouse = {
    id: '',
    name: '',
    address: '',
    coOrdinates: '',
    active: ''
  };

  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehousesService, private router: Router) {}

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

  addWarehouse() {
     let flag = false;

    // Warehouse ID checking if there is already existing Warehouse with that ID - for loop
     for(let warehouse of this.warehouses) {
      if(this.addWarehouseRequest.id == warehouse.id)
      {
        window.alert("There is existing Warehouse with given ID.");
        flag = true;
      }
    }

 // Data validation part checking and making call to service if its properly registered
  if(!flag){
    if(this.addWarehouseRequest.name == '' || this.addWarehouseRequest.address == '' || this.addWarehouseRequest.coOrdinates == '')
    {
      window.alert('Please provide a valid data.');
    } else
    {
      this.warehouseService.addWarehouse(this.addWarehouseRequest)
      .subscribe({
      next: (warehouse) => {
        this.router.navigate(['warehouses'])
      }
      });
      alert('Added successfully');
    }
  }
}

  goBack(){
    this.router.navigate(['warehouses']);
  }
}
