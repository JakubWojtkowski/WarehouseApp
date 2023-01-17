import { Component, OnInit } from '@angular/core';
import { Truck } from '../../../../models/Truck';
import { TruckService } from '../../../../services/Trucks/truck.service';
import { TruckRouteService } from '../../../../services/Trucks/truck-route.service';

@Component({
  selector: 'app-truck-route',
  templateUrl: './truck-route.component.html',
  styleUrls: ['./truck-route.component.css']
})
export class TruckRouteComponent {
  routes: [number []] = [[]];
  trucks: Truck[] = [];
  routesNum = 0;
  arr = Array;

  constructor(private truckRouteService: TruckRouteService, private truckService: TruckService){}

  ngOnInit(): void {
  }

  onSubmit(){
    this.fetchRoutes();
    this.fetchTrucks();
  }

  fetchTrucks(): void{
    this.truckService.getTrucks().subscribe((trucks_api_response) => this.trucks = trucks_api_response["trucks"]);
  }

  fetchRoutes(): void{
    this.truckRouteService.getRoutes().subscribe((routes) => {
      this.routes = routes;
      this.routesNum = routes.length;
    });
  }
}
