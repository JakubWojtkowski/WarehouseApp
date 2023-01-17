import { Component, OnInit } from '@angular/core';
import { Truck } from '../../../../models/Truck';
import { TruckService } from '../../../../services/Trucks/truck.service';


@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})

export class TrucksComponent {
  trucks: Truck[] = [];

  constructor(private truckService: TruckService){}

  ngOnInit(): void {
    this.fetchTrucks();
  }

  deleteTruck(truck: Truck): void{
    this.truckService.deleteTruck(truck).subscribe(
      () => this.trucks = this.trucks.filter(
        (t) => t.domainId !== truck.domainId
      )
    );
  }

  addTruck(truck: Truck): void{
    this.truckService.addTruck(truck).subscribe(() => this.fetchTrucks());
  }

  fetchTrucks(): void{
    this.truckService.getTrucks().subscribe((trucks_api_response) => this.trucks = trucks_api_response["trucks"]);
  }

  patchTruck(truck: Truck): void{
    this.truckService.patchTruck(truck).subscribe(() => this.fetchTrucks());
  }
}
