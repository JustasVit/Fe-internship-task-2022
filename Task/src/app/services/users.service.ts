import {User} from "../models/User";

export class UsersService {
  private loggedInUser: User = {
    id:1,
    name: "Justas",
    surname: "Vitkauskas",
    dateOfBirth: new Date("2000-04-01"),
    gender: "Male",
    country: "Lithuania",
    city: "Vilnius",
    hobbies: "-",
    isOnline: true
  }

  private users: User[] = [
    this.loggedInUser,
    {
      id:2,
      name: "Vardenis",
      surname: "Pavardenis",
      dateOfBirth: new Date("1990-05-21"),
      gender: "Male",
      country: "Lithuania",
      city: "Vilnius",
      hobbies: "-",
      isOnline: false
    },
    {
      id:3,
      name: "Vardenė",
      surname: "Pavardenė",
      dateOfBirth: new Date("2001-07-08"),
      gender: "Female",
      country: "Lithuania",
      city: "Vilnius",
      hobbies: "-",
      isOnline: true
    }
  ]

  updateUser(user: User) {
    this.loggedInUser = user;
  }

  getLoggedInUser() {
    return Object.assign({}, this.loggedInUser);
  }

  getUsers() {
   return this.users;
  }
}
