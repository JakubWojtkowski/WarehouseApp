import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from '../../../../../models/Warehouse-model';
import { WarehousesService } from '../../../../../services/Warehouses/warehouses.service';

@Component({
  selector: 'app-inhibit-warehouse',
  templateUrl: './inhibit-warehouse.component.html',
  styleUrls: ['./inhibit-warehouse.component.css']
})
export class InhibitWarehouseComponent {

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

  inhibit(){
    //console.log("inhibit works...");
    this.warehouseService.inhibitWarehouse(this.warehouseDetails.id, this.warehouseDetails)
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
