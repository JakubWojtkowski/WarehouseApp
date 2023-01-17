import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Path } from '../../../../models/Path';

@Component({
  selector: 'app-path-item',
  templateUrl: './path-item.component.html',
  styleUrls: ['./path-item.component.css']
})
export class PathItemComponent {
  @Input() path: Path | undefined;
  @Output() onDeletePath: EventEmitter<Path> = new EventEmitter();

 // faTimes = faTimes;

  onDelete(path: any){
    this.onDeletePath.emit(path);
  }
}
