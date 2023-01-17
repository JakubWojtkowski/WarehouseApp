import { Component, OnInit } from '@angular/core';
import { Path } from '../../../../../models/Path';
import { PathsAPIRespose } from '../../../../../models/PathsAPIResponse';
import { PathService } from '../../../../../services/Paths/path.service';

@Component({
  selector: 'app-path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.css']
})
export class PathListComponent implements OnInit {

  start: number = 0;
  end: number = 5;

  paths: Path[] = [];

  constructor(private pathService: PathService){}

  ngOnInit(){
      this.fetchPaths();
    }

  fetchPaths(){
    this.pathService.getPaths().subscribe((paths) => this.paths = paths["paths"]);
  }

  previousPage(){
    this.start -=5;
    this.end -= 5;
  }
  nextPage(){
    if(this.paths.length > this.end)
    {
      this.start +=5;
      this.end += 5;
    }
  }
}
