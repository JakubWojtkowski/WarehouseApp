import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TruckRouteService {
  private truckRoutesUrl = 'http://localhost:5000/paths'

  constructor(private http:HttpClient) {}

  getRoutes(): Observable<[number[]]>{
    // return of(warehouses_to_visit.toString());
    return this.http.get<[number[]]>(this.truckRoutesUrl)
  }
}
