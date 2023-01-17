import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AppComponent } from '../../../../app.component';
import { User } from '../../../../models/User-model';
import { AuthenticationService } from '../../../../services/Login/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private msalService: MsalService, private router: Router, private authService: AuthenticationService, private app: AppComponent) {}

  ngOnInit() : void {

  }

    logout(){
      if(this.msalService.instance.getActiveAccount() != null)
      {
        this.msalService.logout();
        this.router.navigate(['login']);
        this.app.logout();
      } else {
        this.app.logout();
      }

    }

    back(){
      this.router.navigate(['home']);
    }
}
