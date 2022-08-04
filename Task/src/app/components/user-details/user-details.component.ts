import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserRepository} from "../../repositories/user.repository";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  loggedInUser: User | undefined;
  user: User | undefined;
  private routeSub: Subscription;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private userRepository: UserRepository) {
  }

  ngOnInit() {

    const userId = this.route.snapshot.paramMap.get('id');

    userId === null || Number.isNaN(Number(userId)) ?
      this.router.navigate(['/error']) :
      this.user = this.usersService.getUserById(Number(userId));

    this.userRepository.user$.subscribe((user) => {
      user === undefined ?
        this.router.navigate(['/error']) :
        this.loggedInUser = user;
    })
  }
}
