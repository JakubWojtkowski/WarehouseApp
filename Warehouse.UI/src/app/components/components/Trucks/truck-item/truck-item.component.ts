import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Truck } from '../../../../models/Truck';

@Component({
  selector: 'app-truck-item',
  templateUrl: './truck-item.component.html',
  styleUrls: ['./truck-item.component.css']
})
export class TruckItemComponent {
  @Input() truck: Truck | undefined;
  @Output() onDeleteTruck: EventEmitter<Truck> = new EventEmitter();
  @Output() onInhibitTruck: EventEmitter<Truck> = new EventEmitter();

  //faTimes = faTimes;

  onDelete(truck: any){
    this.onDeleteTruck.emit(truck);
  }

  onInhibit(){
    const newTruck: Truck = {
      _id: this.truck?._id,
      domainId: this.truck?.domainId,
      tare: this.truck?.tare,
      load_capacity: this.truck?.load_capacity,
      maximum_battery_charge: this.truck?.maximum_battery_charge,
      autonomy_when_fully_charged: this.truck?.autonomy_when_fully_charged,
      fast_charging_time: this.truck?.fast_charging_time,
      is_active: !this.truck?.is_active
    };
    this.onInhibitTruck.emit(newTruck);
  }
}
