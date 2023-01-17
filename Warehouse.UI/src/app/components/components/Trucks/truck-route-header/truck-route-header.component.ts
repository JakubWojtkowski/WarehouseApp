import { Component } from '@angular/core';
import { UiService } from '../../../../services/ui/ui.service';



@Component({
  selector: 'app-truck-route-header',
  templateUrl: './truck-route-header.component.html',
  styleUrls: ['./truck-route-header.component.css']
})
export class TruckRouteHeaderComponent {
  title: string = 'Truck Routes generator';

  constructor(private uiService: UiService){
  }

}
