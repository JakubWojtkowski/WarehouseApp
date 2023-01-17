import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../../models/User-model';
import { AuthenticationService } from '../../../../services/Login/authentication.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  apiUrl: string = environment.apiUrl;

  userRegisterRequest: User = {
    domainId: '',
    id: 0,
    userName: '',
    typeOfManager: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmed: ''
  };

  users: User[] = [];

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.authenticationService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  goBack() {
    this.router.navigate(['accounts']);
  }

  signUp() {

    let flag = false;
    // User ID checking if there is already existing user with that ID
    for(let user of this.users) {
      if(this.userRegisterRequest.id == user.id)
      {
        window.alert("There is existing User with given ID.");
        flag = true;
      }
    }

    // Data validation part checking and making call to service if its properly registered
  if(!flag){
    if(this.userRegisterRequest.userName == '' || this.userRegisterRequest.typeOfManager == '' || this.userRegisterRequest.phoneNumber == '' || this.userRegisterRequest.email == '' || this.userRegisterRequest.password == '')
    {
      console.log(this.userRegisterRequest.typeOfManager);
      window.alert('Please provide a data in empty field.');
    }
    else if(this.userRegisterRequest.password != this.userRegisterRequest.passwordConfirmed)
      window.alert('The confirmed password is not the same as the current password!');
    else if(this.userRegisterRequest.phoneNumber.length < 9)
    {
      window.alert('Please provide a proper telephone number');
    }
    else
    {
      this.authenticationService.signUp(this.userRegisterRequest)
      .subscribe({
      next: (user) => {
        this.router.navigate(['accounts']);
      }
      });
      window.alert(`New ${this.userRegisterRequest.typeOfManager } ${this.userRegisterRequest.userName} account added successfully!`);
    }
  }
 }

}
