import {UsersService} from "./users.service";
import {Injectable} from "@angular/core";
import {UserRepository} from "../repositories/user.repository";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usersService: UsersService,
              private repo: UserRepository) {
  }

  login(email: string, password: string): boolean {
    const user = this.usersService.getUserByEmail(email);
    if (user !== undefined && user.password === password) {
      //sessionStorage.setItem('id', String(user.id));
      this.repo.setUser(user);
      return true;
    }
    return false;
  }

  logout() {
    this.repo.clear();
  }
}
