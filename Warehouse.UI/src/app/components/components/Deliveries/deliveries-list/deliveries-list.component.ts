import { Component, OnInit, ViewChild } from '@angular/core';
import { Delivery } from '../../../../models/Delivery-model';
import { DeliveriesService } from '../../../../services/Deliveries/deliveries.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.css']
})
export class DeliveriesListComponent implements OnInit {

  // isTheFirstPage: boolean = false;
  // isTheLastPage: boolean = false;

  start: number = 0;
  end: number = 10;

  componentName = 'deliveries-list';
  deliveries: Delivery[] = [];
  dataSource = new MatTableDataSource(this.deliveries);
  displayedColumns: string[] = ['id', 'dateOfDelivery', 'deliveryMass', 'warehouseId', 'placementTime', 'receiveTime'];

  constructor(private deliveryService: DeliveriesService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.deliveryService.getAllDeliveries()
    .subscribe({
      next: (deliveries) => {
        this.deliveries = deliveries;
        this.dataSource = new MatTableDataSource(this.deliveries);
        this.dataSource.sort = this.sort;
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
    if(this.deliveries.length > this.end)
    {
      this.start +=10;
      this.end += 10;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
