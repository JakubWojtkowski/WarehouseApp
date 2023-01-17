import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Path } from '../../../../models/Path';
import { UiService } from '../../../../services/ui/ui.service';

@Component({
  selector: 'app-add-path',
  templateUrl: './add-path.component.html',
  styleUrls: ['./add-path.component.css']
})
export class AddPathComponent {
  @Output() onAddPath: EventEmitter<Path> = new EventEmitter();

  _id: string | undefined;
  domainId: string | undefined;
  departure_warehouse: string | undefined;
  arrival_warehouse: string | undefined;
  distance: number | undefined;
  time: number | undefined;
  energy_used: number | undefined;
  extra_time: number | undefined;

  showCreatePath: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onPathToggle().subscribe(value => this.showCreatePath = value)
  }

  onSubmit(){
    //@todo - add data validation

    const newPath = {
      _id: this._id,
      domainId: this.domainId,
      departure_warehouse: this.departure_warehouse,
      arrival_warehouse: this.arrival_warehouse,
      distance: this.distance,
      time: this.time,
      energy_used: this.energy_used,
      extra_time: this.extra_time
    }

    this.onAddPath.emit(newPath);

    this.departure_warehouse = '';
    this.arrival_warehouse = '';
    this.distance = 0;
    this.time = 0;
    this.energy_used = 0;
    this.extra_time = 0;
  }
}
