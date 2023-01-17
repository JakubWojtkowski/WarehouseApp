import { Component, Input } from '@angular/core';
import { Truck } from '../../../models/Truck';

@Component({
  selector: 'app-truck-route-item',
  templateUrl: './truck-route-item.component.html',
  styleUrls: ['./truck-route-item.component.css']
})
export class TruckRouteItemComponent {
  @Input() truck: Truck | undefined;
  @Input() route: Number[] | undefined;
}
