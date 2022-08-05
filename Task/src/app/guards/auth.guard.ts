import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserRepository} from "../repositories/user.repository";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private userRepository: UserRepository) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.userRepository.user$.subscribe((user) => {
      if (user === undefined) {
        this.router.navigate(['/login']);
      }
    });
    return true;
  }
}
