import {User} from "../models/User";

export class UsersService{
  loggedInUser: User = {
    name: "Justas",
    surname: "Vitkauskas",
    dateOfBirth: new Date("2000-04-01"),
    gender: "Male",
    country: "Lithuania",
    city: "Vilnius",
    hobbies: "-"
  }

  updateUser(user:User){
    this.loggedInUser = user;
  }

  getLoggedInUser(){
    return this.loggedInUser;
  }
}
