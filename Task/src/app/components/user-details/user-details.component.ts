import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  loggedInUser: User;

  constructor(private usersService : UsersService) {}

  ngOnInit(){
    this.loggedInUser = this.usersService.getLoggedInUser();
  }
}
