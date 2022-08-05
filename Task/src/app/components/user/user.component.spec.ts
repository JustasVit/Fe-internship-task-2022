import {UserComponent} from "./user.component";
import {User} from "../../models/User";
import {render} from "@testing-library/angular";

const user: User = {
  id: 1,
  name: "Justas",
  surname: "Vitkauskas",
  dateOfBirth: new Date("2000-04-01"),
  gender: "Male",
  country: "Lithuania",
  city: "Vilnius",
  hobbies: "-",
  isOnline: true
}

it('should create', async () => {
  await render(UserComponent, {
    componentProperties: {user: user}
  });
});
