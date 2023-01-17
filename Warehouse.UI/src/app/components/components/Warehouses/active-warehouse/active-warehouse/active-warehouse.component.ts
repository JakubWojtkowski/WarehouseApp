import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from '../../../../../models/Warehouse-model';
import { WarehousesService } from '../../../../../services/Warehouses/warehouses.service';

@Component({
  selector: 'app-active-warehouse',
  templateUrl: './active-warehouse.component.html',
  styleUrls: ['./active-warehouse.component.css']
})
export class ActiveWarehouseComponent {

  warehouseDetails: Warehouse = {
    id: '',
    name: '',
    address: '',
    coOrdinates: '',
    active:''
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

  activeWarehouse(){
    console.log("active works...");
    this.warehouseService.activeWarehouse(this.warehouseDetails.id, this.warehouseDetails)
      .subscribe({
        next: (response) => {
        this.router.navigate(['warehouses']);
        }
      });
  }

  back(){
    this.router.navigate(['warehouses']);
  }
}
