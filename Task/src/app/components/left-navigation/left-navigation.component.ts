import { Component, OnInit } from '@angular/core';
import {faTv, faStore, faUsersLine} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {

  faTv = faTv;
  faStore = faStore;
  faUsersLine = faUsersLine;

  constructor() { }

  ngOnInit(): void {
  }

}
