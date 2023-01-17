import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../../../services/ui/ui.service';

@Component({
  selector: 'app-paths-header',
  templateUrl: './paths-header.component.html',
  styleUrls: ['./paths-header.component.css']
})
export class PathsHeaderComponent {
  title: string = 'Path Creator';
  showCreatePath: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onPathToggle().subscribe((value) => (this.showCreatePath = value))
  }
  toggleCreatePath(){
    this.uiService.toggleAddPath();
  }
}
