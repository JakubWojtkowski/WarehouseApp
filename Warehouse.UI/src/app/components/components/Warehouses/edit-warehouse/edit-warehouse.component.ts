import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from '../../../../models/Warehouse-model';
import { WarehousesService } from '../../../../services/Warehouses/warehouses.service';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent {

  warehouseDetails: Warehouse = {
    id: '',
    name: '',
    address: '',
    coOrdinates: '',
    active: ''
  }
constructor(private route: ActivatedRoute,
  private warehouseService: WarehousesService, private router: Router) {}

ngOnInit() : void {
  this.route.paramMap.subscribe({
    next:(params) => {
      const id = params.get('id');

      if (id) {
        this.warehouseService.getWarehouse(id).subscribe({
          next: (response) => {
            this.warehouseDetails = response;
      }})
      }
    }
  })
}

updateWarehouse() {
  if(this.warehouseDetails.name == '' || this.warehouseDetails.address == '' || this.warehouseDetails.coOrdinates == '')
  {
    alert('Please provide a valid data.');
  } else
  {
    this.warehouseService.updateWarehouse(this.warehouseDetails.id,
    this.warehouseDetails)
    .subscribe({
      next: (response) => {
      this.router.navigate(['warehouses']);
      }
    });
  }
}

goBack() {
  this.router.navigate(['warehouses']);
}
}
