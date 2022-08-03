import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class UserDetailsEditingGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const routeId = Number(next.params['id']);
    const loggedInUserId = this.authService.getLoggedInUserId();

    if (routeId !== loggedInUserId) {
      this.router.navigate(['/error']);
    }
    return true;
  }
}
