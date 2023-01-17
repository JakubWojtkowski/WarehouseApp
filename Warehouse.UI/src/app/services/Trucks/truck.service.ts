import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrucksAPIRespose } from '../../models/TrucksAPIResponse';
import { Truck } from '../../models/Truck';
import { PatchTruck } from '../../models/PatchTruck';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private apiUrl = 'http://localhost:9090/api/trucks'

  constructor(private http:HttpClient) { }

  getTrucks():  Observable<TrucksAPIRespose>{
    return this.http.get<TrucksAPIRespose>(this.apiUrl)
  }

  deleteTruck(truck: Truck): Observable<Truck>{
      const url =  `${this.apiUrl}/${truck._id}`;
      return this.http.delete<Truck>(url);
  }

  addTruck(truck: Truck): Observable<Truck>{
    const url =  `${this.apiUrl}/post`;
    return this.http.post<Truck>(url, truck, httpOptions);
  }

  patchTruck(truck: Truck): Observable<PatchTruck>{
    const url =  `${this.apiUrl}/update/${truck._id}`;
    const patchTruck: PatchTruck = {
      tare: truck?.tare,
      load_capacity: truck?.load_capacity,
      maximum_battery_charge: truck?.maximum_battery_charge,
      autonomy_when_fully_charged: truck?.autonomy_when_fully_charged,
      fast_charging_time: truck?.fast_charging_time,
      is_active: truck?.is_active
    };
    return this.http.patch<PatchTruck>(url, patchTruck, httpOptions);
  }
}
