import { Injectable } from '@angular/core';
import * as Msal from '@azure/msal';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../models/User-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class MsaluserService {

  ifLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

}
