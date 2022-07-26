import { Component, OnInit } from '@angular/core';
import {faTv, faHouse, faStore, faUsersLine, faUser} from "@fortawesome/free-solid-svg-icons";

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

  constructor() { }

  ngOnInit(): void {
  }

}