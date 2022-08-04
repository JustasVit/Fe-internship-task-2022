import {Component, OnInit} from '@angular/core';
import {faHouse, faStore, faTv, faUser, faUsersLine} from "@fortawesome/free-solid-svg-icons";
import {User} from "../../models/User";
import {UserRepository} from "../../repositories/user.repository";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  faHouse = faHouse;
  faTv = faTv;
  faStore = faStore;
  faUsersLine = faUsersLine;
  faUser = faUser;
  loggedInUser: User;

  constructor(private userRepository: UserRepository,
              private router: Router) {
  }

  ngOnInit() {
    this.userRepository.user$.subscribe((user) => {
      user === undefined ?
        this.router.navigate(['/error']) :
        this.loggedInUser = user;
    })
  }
}
