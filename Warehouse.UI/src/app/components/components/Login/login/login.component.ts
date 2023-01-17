import { HttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { AppComponent } from '../../../../app.component';
import { User } from '../../../../models/User-model';
import { MsalGuard } from '../../../../msal.guard';
import { AuthenticationService } from '../../../../services/Login/authentication.service';
import { MsaluserService } from '../../../../services/msalUser/msaluser.service';
import { HomeComponent } from '../../Home/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {

  title = 'Login';

  loginRequest: any = {
    id: 0,
    email: '',
    password: ''
  };

  users: User[] = [];

  user: User = {
    domainId: '',
    id: 0,
    userName: '',
    typeOfManager: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmed: ''
  }

  isLoggedIn: boolean = false;

  // apiResponse: string = '';

  constructor(private httpClient: HttpClient, private msalService: MsalService, private authenticationService : AuthenticationService,
    private router: Router, private app: AppComponent, private msalGuard: MsalGuard, private msalUserService: MsaluserService) {}

  ngOnInit(): void {
    this.authenticationService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (response) => {
        console.log(response);
      }
    })}

    loginWithMsal() {
      this.msalService.loginPopup()
      .subscribe((response: AuthenticationResult) =>
      {
        this.msalService.instance.setActiveAccount(response.account);
        //this.msalService.instance.getActiveAccount()?.email;
        this.router.navigate(['home']);
      });
    }

    isLoggedInMsal(): boolean {
      return this.msalService.instance.getActiveAccount() != null;
    }

    loggedWithMsal(){
      //this.authenticationService.onLogin();
      this.isLoggedIn = true;
      this.app.isLoggedIn = this.isLoggedIn;
    }

    getName() : string | undefined {
      if(this.msalService.instance.getActiveAccount() == null) {
        return 'Unknown name';
      }

      return this.msalService.instance.getActiveAccount()?.name;
    }


  onLogin() {
    var requestId = this.loginRequest.id;
    console.log(requestId);

  if(this.loginRequest.id <= 0 || this.loginRequest.email == '' || this.loginRequest.password == '')
  {
    window.alert('Empty data!');
  }
  else {
    this.authenticationService.getUser(requestId).subscribe({
      next: (user) => {
      this.user = user;

      if(user.typeOfManager == 'Administrator')
          this.app.isAdmin = true;
      else
          this.app.isAdmin = false;
    },
    error: (response) => {
      console.log(response);
    }
  });

  if(this.loginRequest.email !=  this.user.email && this.loginRequest.password == this.user.password)
    {
      window.alert('Invalid email. Try again or create a new account if you do not have one.');
      console.log(this.user.email);
    }
    else if(this.loginRequest.password != this.user.password && this.loginRequest.email == this.user.email)
    {
      window.alert('Invalid password. Try again or create a new account if you do not have one.');
      console.log(this.user.password);
    }
    else if(this.loginRequest.email != this.user.email && this.loginRequest.password != this.user.password)
    {
      window.alert('Invalid data. Try again or create a new account if you do not have one.');
    }
    else
    {
      this.authenticationService.onLogin();
      this.authenticationService.loggedUser = this.user;
      this.isLoggedIn = true;
      this.app.isLoggedIn = this.isLoggedIn;
      this.msalUserService.ifLoggedIn = true;
    }
  }
}
/*
callProfile() {
  this.httpClient.get("https://graph.microsoft.com/v1.0/me").subscribe( resp => {
    this.apiResponse = JSON.stringify(resp);
  })
}*/


}
