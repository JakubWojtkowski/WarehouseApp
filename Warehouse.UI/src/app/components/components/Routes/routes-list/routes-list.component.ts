import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { PathService } from '../../../../services/Paths/path.service';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent {

  start: number = 0;
  end: number = 10;

  routes: Route[] = [];

  constructor(private pathService: PathService){}

  ngOnInit(){
      this.fetchRoutes();
    }

  fetchRoutes(){
  //  this.pathService.getPaths().subscribe((paths) => this.routes = routes["routes"]);
  }

  previousPage(){
    this.start -=10;
    this.end -= 10;
  }
  nextPage(){
    if(this.routes.length > this.end)
    {
      this.start +=10;
      this.end += 10;
    }
  }
}
