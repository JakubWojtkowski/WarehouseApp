import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTruck: boolean = false;
  private truckSubject = new Subject<any>();
  private showAddPath: boolean = false;
  private pathSubject = new Subject<any>();

  constructor() { }

  toggleAddTruck(): void{
    this.showAddTruck = !this.showAddTruck;
    this.truckSubject.next(this.showAddTruck);
  }

  toggleAddPath(): void{
    this.showAddPath = !this.showAddPath;
    this.pathSubject.next(this.showAddPath);
  }


  onTruckToggle(): Observable<any>{
    return this.truckSubject.asObservable();
  }

  onPathToggle(): Observable<any>{
    return this.pathSubject.asObservable();
  }
}
