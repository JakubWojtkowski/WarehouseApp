import { Component, OnInit } from '@angular/core';
import { Path } from '../../../../models/Path';
import { PathService } from '../../../../services/Paths/path.service';


@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.css']
})
export class PathsComponent {
  paths: Path[] = [];

  constructor(private pathService: PathService){}

  ngOnInit(): void {
    this.fetchPaths();
  }

  deletePath(path: Path){
    this.pathService.deletePath(path).subscribe(
      () => this.paths = this.paths.filter(
        (p) => p.domainId !== path.domainId
      )
    );
  }

  addPath(path: Path){
    this.pathService.addPath(path).subscribe(() => this.fetchPaths());
  }

  fetchPaths(){
    this.pathService.getPaths().subscribe((paths) => this.paths = paths["paths"]);
  }
}
