import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AppComponent } from '../../../../../app.component';
import { User } from '../../../../../models/User-model';
import { AuthenticationService } from '../../../../../services/Login/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: User = {
      domainId: '',
      id: 0,
      userName: '',
      typeOfManager: '',
      phoneNumber: '',
      email: '',
      password:'',
      passwordConfirmed: ''
    };
  constructor(private router: Router, private authService: AuthenticationService, private app: AppComponent, private msalService: MsalService) {}

  ngOnInit(): void {
    this.user = this.authService.loggedUser;
    if(this.msalService.instance.getActiveAccount() != null)
      this.getName();
  }

  getName() : string | undefined {
    if(this.msalService.instance.getActiveAccount() == null) {
      return '';
    }

    return this.msalService.instance.getActiveAccount()?.name;
  }

  // do poprawienia, moze dodac pop up window z potwierdzeniem wyboru
  cancelUserAccount()
  {
    if(this.msalService.instance.getActiveAccount() != null)
    {
      return window.alert('You can not cancel your account!');
    }

    console.log(this.user);

    prompt("for sure?"); // for me - test

    this.annonymizeAccount();
    console.log(this.user);

    this.authService.cancelUserAccount(this.user.id,
      this.user)
      .subscribe({
        next: (response) => {
        this.router.navigate(['login']);
        }
      });
  }

  annonymizeAccount()
  {
    this.user.userName = this.user.userName[0] + '******';
    this.user.typeOfManager = this.user.typeOfManager[0] + '*********';
    this.user.phoneNumber = this.user.phoneNumber[0]+ '********';
    this.user.email = this.user.email[0] + '*********';
    this.user.password = '*********';
    this.user.passwordConfirmed = '*********';
  }
}
