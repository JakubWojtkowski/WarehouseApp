import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delivery } from '../../models/Delivery-model';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getDeliveries():  Observable<Delivery[]>{
    return this.http.get<Delivery[]>(this.apiUrl + '/api/Delivery')
  }
}
