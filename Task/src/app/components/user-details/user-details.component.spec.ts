import {render} from "@testing-library/angular";
import {UsersService} from "../../services/users.service";
import {RouterTestingModule} from "@angular/router/testing";
import {UserDetailsComponent} from "./user-details.component";

it('should create', async () => {
  await render(UserDetailsComponent, {
    imports: [RouterTestingModule],
    providers: [UsersService]
  });
});
