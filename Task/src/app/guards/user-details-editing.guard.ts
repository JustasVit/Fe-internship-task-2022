import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class UserDetailsEditingGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let routeId = next.params['id'];
    let loggedInUserId = this.authService.getLoggedInUserId();
    if(routeId == loggedInUserId){
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
