import { Component} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  loggedInUser: User = {name:"Justas",surname:"Vitkauskas",dateOfBirth:new Date("2000-04-01")}

  constructor() { }
}
