import {User} from "../models/User";
import {UsersService} from "./users.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private usersService: UsersService) {}

  getLoggedInUser(): User | undefined {
    let loggedInUserId = Number(sessionStorage.getItem('id'));
    return this.usersService.getUserById(loggedInUserId);
  }

  getLoggedInUserId(): number | undefined {
    return this.getLoggedInUser()?.id
  }
 }
