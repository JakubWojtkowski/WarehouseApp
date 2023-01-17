import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Truck } from '../../../../models/Truck';
import { UiService } from '../../../../services/ui/ui.service';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css']
})
export class AddTruckComponent {
  @Output() onAddTruck: EventEmitter<Truck> = new EventEmitter();

  _id: number | undefined;
  domainId: string | undefined;
  tare: number | undefined;
  load_capacity: number | undefined;
  maximum_battery_charge: number | undefined;
  autonomy_when_fully_charged: number | undefined;
  fast_charging_time: number | undefined;
  is_active: boolean | undefined;

  showCreateTruck: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onTruckToggle().subscribe(value => this.showCreateTruck = value)
  }

  onSubmit(){
    //@todo - add data validation

    const newTruck = {
      _id: this._id,
      domainId: this.domainId,
      tare: this.tare,
      load_capacity: this.load_capacity,
      maximum_battery_charge: this.maximum_battery_charge,
      autonomy_when_fully_charged: this.autonomy_when_fully_charged,
      fast_charging_time: this.fast_charging_time,
      is_active: this.is_active
    }

    this.onAddTruck.emit(newTruck);

    this.tare = 0;
    this.load_capacity = 0;
    this.maximum_battery_charge = 0;
    this.autonomy_when_fully_charged = 0;
    this.fast_charging_time = 0;
    this.is_active = true;
  }
}
