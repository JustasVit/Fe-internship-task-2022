import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UsersService} from "../services/users.service";


@Injectable({
  providedIn: 'root'
})
export class UserDetailsGuard implements CanActivate {

  constructor(private router: Router,
              private usersService: UsersService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.usersService.getUserById(Number(next.params['id'])) === undefined) {
      this.router.navigate(['/error']);
    }
    return true;
  }
}
