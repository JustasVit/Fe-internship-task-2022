import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users-list', templateUrl: './users-list.component.html', styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  items = 5;
  page = 1;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  public handlePageChange(event: any) {
    window.scroll({
      top: 0, left: 0, behavior: 'smooth'
    });
    this.page = event;
  }
}
