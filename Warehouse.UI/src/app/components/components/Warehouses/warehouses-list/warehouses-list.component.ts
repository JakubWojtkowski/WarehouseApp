import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from '../../../../models/Warehouse-model';
import { WarehousesService } from '../../../../services/Warehouses/warehouses.service';

@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.css']
})
export class WarehousesListComponent implements OnInit {

  start: number = 0;
  end: number = 10;

  warehouses: Warehouse[] = [];
  constructor(private warehouseService: WarehousesService, private router: Router) { }

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

  previousPage(){
    this.start -=10;
    this.end -= 10;
  }
  nextPage(){
    if(this.warehouses.length > this.end)
    {
      this.start +=10;
      this.end += 10;
    }
  }
}
