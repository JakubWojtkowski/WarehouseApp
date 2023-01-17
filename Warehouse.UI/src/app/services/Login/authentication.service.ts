import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/User-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser: User = {
    domainId: '',
    id: 0,
    userName: '',
    typeOfManager: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmed: ''
  }
  apiUrl: string = environment.apiUrl;
  isAdmin: boolean = false;

  constructor(private http:HttpClient, private router: Router) { }



  onLogin() {
    window.alert('Login successful.');
    this.router.navigate(['home']);
  }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/api/User');
  }

  getUser(id: string): Observable<User> { // potem zmienic na id: string bo guid
    return this.http.get<User>(this.apiUrl + '/api/User/' + id);
  }

  cancelUserAccount(id: number, userUpdateRequest: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/api/User?id=' + id,
    userUpdateRequest);
  }

  signUp(userRegisterRequest: User): Observable<User> {
    userRegisterRequest.domainId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.apiUrl +'/api/User', userRegisterRequest);
  }
}
