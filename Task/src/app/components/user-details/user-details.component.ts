import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  loggedInUser: User =
    {name:"Justas",
    surname:"Vitkauskas",
    dateOfBirth: new Date("2000-04-01"),
    gender:"Male",
    country:"Lithuania",
    city:"Vilnius",
    hobbies:"-"}

  // pipe = new DatePipe('en-US');
  // dateString : string | null = null;
  //
  // ngOnInit(): void {
  //   this.dateString = this.pipe.transform(this.loggedInUser.dateOfBirth, 'dd/MM/yyyy');
  // }
}
