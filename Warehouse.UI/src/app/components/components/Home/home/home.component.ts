import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private router: Router, private app: AppComponent, private msalService: MsalService){}

  goToWarehouses(){
    this.app.HomeOption = 'warehouses';
    this.router.navigate(['warehouses']);
  }

  goToDeliveries(){
    this.app.HomeOption = 'deliveries';
    this.router.navigate(['deliveries']);
  }

  goToTrucks(){
    this.app.HomeOption = 'trucks';
    this.router.navigate(['trucks']);
  }

  goToPaths(){
    this.app.HomeOption = 'paths';
    this.router.navigate(['paths']);
  }

  goToRoutes(){
    this.app.HomeOption = 'routes';
    this.router.navigate(['routes']);
  }

}
