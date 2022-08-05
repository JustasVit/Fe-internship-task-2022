import {User} from "../models/User";

export class UsersService {

  public users: User[] = [
    {
      id: 1,
      name: "Justas",
      surname: "Vitkauskas",
      dateOfBirth: new Date("2000-04-01"),
      gender: "Male",
      country: "Lithuania",
      city: "Vilnius",
      hobbies: "-",
      isOnline: true,
      email: "random1@email.com",
      password: "randomPassword"
    },
    {
      id: 2,
      name: "Vardenis",
      surname: "Pavardenis",
      dateOfBirth: new Date("1990-05-21"),
      gender: "Male",
      country: "Lithuania",
      city: "Vilnius",
      hobbies: "-",
      isOnline: false,
      email: "random2@email.com",
      password: "randomPassword"
    },
    {
      id: 3,
      name: "Vardenė",
      surname: "Pavardenė",
      dateOfBirth: new Date("2001-07-08"),
      gender: "Female",
      country: "Lithuania",
      city: "Vilnius",
      hobbies: "-",
      isOnline: true,
      email: "random3@email.com",
      password: "randomPassword"
    }
  ]

  updateUser(updatedUser: User, id: number) {
    this.users = this.users.map(user => user.id === id ? updatedUser : user)
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id)
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email)
  }
}
