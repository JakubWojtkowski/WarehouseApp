import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Delivery } from '../../models/Delivery-model';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  apiUrl: string = environment.apiUrl;

  // mockDeliveries: Delivery[] = [
  //   {
  //     id: 'id1',
  //     dateOfDelivery: new Date(2010, 2, 23),
  //     deliveryMass: 100,
  //     warehouseId: 1,
  //     placementTime: 1,
  //     receiveTime: 2
  //   },
  //   {
  //     id: 'id2',
  //     dateOfDelivery: new Date(2010, 2, 24),
  //     deliveryMass: 200,
  //     warehouseId: 2,
  //     placementTime: 3,
  //     receiveTime: 4
  //   }
  // ];
  constructor(private http: HttpClient) { }

  getAllDeliveries() : Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.apiUrl + '/api/Delivery');
    // return of(this.mockDeliveries);
  }

  /*checkWarehouseID(addDeliveryRequest: Delivery) : boolean {
    var o = this.http.get<Warehouse>(this.apiUrl + '/api/Warehouse/' + addDeliveryRequest.warehouseId);
    console.log(o);
    if(o == null) return false;
    else return true;
  }*/

  addDelivery(addDeliveryRequest: Delivery) : Observable<Delivery>{
      addDeliveryRequest.id = '00000000-0000-0000-0000-000000000000';
      return this.http.post<Delivery>(this.apiUrl + '/api/Delivery',
      addDeliveryRequest);
  }

  getDelivery(id: string): Observable<Delivery> {
    return this.http.get<Delivery>(this.apiUrl + '/api/Delivery/' + id);
  }

  updateDelivery(id: string, updateDeliveryRequest: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(this.apiUrl + '/api/Delivery?id=' + id,
    updateDeliveryRequest);
  }

  deleteDelivery(id: string): Observable<Delivery> {
    return this.http.delete<Delivery>(this.apiUrl + '/api/Delivery/' + id);
  }
}
