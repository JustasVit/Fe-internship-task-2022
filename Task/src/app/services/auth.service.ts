import {User} from "../models/User";
import {UsersService} from "./users.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usersService: UsersService) {
  }

  getLoggedInUser(): User | undefined {
    const loggedInUserId = Number(sessionStorage.getItem('id'));
    return this.usersService.getUserById(loggedInUserId);
  }

  getLoggedInUserId(): number | undefined {
    return this.getLoggedInUser()?.id
  }

  login(email: string, password: string): boolean {
    console.log(email)
    const user = this.usersService.getUserByEmail(email);
    console.log(user)
    if (user !== undefined && user.password === password) {
      sessionStorage.setItem('id', String(user.id));
      return true;
    }
    return false;
  }

  logout() {

  }
}
