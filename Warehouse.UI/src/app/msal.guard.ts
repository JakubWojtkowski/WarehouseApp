import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { MsaluserService } from './services/msalUser/msaluser.service';

@Injectable({
  providedIn: 'root'
})
export class MsalGuard implements CanActivate {

  constructor(private msalService: MsalService, private msalUserService: MsaluserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.msalService.instance.getActiveAccount() == null) {
        if(this.msalUserService.ifLoggedIn == true) { return true; }
        return false;
      }
      return true;
  }


}
