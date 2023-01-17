import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn: boolean = false;
  HomeOption: string = '';
  isAdmin: boolean = false;

  constructor(private router: Router, private msalService: MsalService){

  }
  ngOnInit() {};

  // switch off the nav option which shows us the w&d or t&p part of the page
  switchOffnav(){this.HomeOption = '';}

  // checking if the user is logged in via microsoft account
  isLoggedInMsal(): boolean {
      return this.msalService.instance.getActiveAccount() != null;
    }

// logout for users logged in via login and password form
  logout() {
      this.router.navigate(["login"]);
      this.isLoggedIn = false;
    }
  }
