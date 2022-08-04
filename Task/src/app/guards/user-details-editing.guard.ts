import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserRepository} from "../repositories/user.repository";


@Injectable({
  providedIn: 'root'
})
export class UserDetailsEditingGuard implements CanActivate {

  constructor(private router: Router,
              private userRepository: UserRepository) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const routeId = Number(next.params['id']);

    this.userRepository.user$.subscribe((user) => {
      if (routeId !== user?.id) {
        this.router.navigate(['/error']);
      }
    })
    return true;
  }
}
