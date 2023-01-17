import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../../../../models/User-model';
import { AuthenticationService } from '../../../../../../../services/Login/authentication.service';


@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.css']
})
export class UserRemoveComponent implements OnInit {

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

  constructor(private route: ActivatedRoute,
    private router: Router,  private authService: AuthenticationService) {}

  ngOnInit() : void{
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if (id) {
          this.authService.getUser(id).subscribe({
            next: (response) => {
              this.user = response;
        }})
        }
      }
    })
  };

  returnBack(){
    this.router.navigate(['/accounts/users']);
  }

  cancelUserAccount()
  {/*
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
      });*/
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
