import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../../../models/User-model';
import { AuthenticationService } from '../../../../../../services/Login/authentication.service';

@Component({
  selector: 'app-user-cancel',
  templateUrl: './user-cancel.component.html',
  styleUrls: ['./user-cancel.component.css']
})
export class UserCancelComponent implements OnInit {

  start: number = 0;
  end: number = 5;

  users: User[] = [];
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  goBack(){
    this.router.navigate(['accounts']);
  }

  previousPage(){
    this.start -= 5;
    this.end -= 5;
  }
  nextPage(){
    if(this.users.length > this.end)
    {
      this.start += 5;
      this.end += 5;
    }
  }
}
