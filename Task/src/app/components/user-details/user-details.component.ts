import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  loggedInUserId: number | undefined;
  user: User | undefined;
  private routeSub: Subscription;

  constructor(private usersService : UsersService,
              private authService: AuthService,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.routeSub = this.route.params.subscribe((params) => {
      this.user = this.usersService.getUserById(params['id']);
      this.loggedInUserId = this.authService.getLoggedInUserId()
    })
  }
}
