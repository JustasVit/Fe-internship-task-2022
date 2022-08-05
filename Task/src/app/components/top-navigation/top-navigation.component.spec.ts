import {render} from "@testing-library/angular";
import {UsersService} from "../../services/users.service";
import {TopNavigationComponent} from "./top-navigation.component";

it('should create', async () => {
  await render(TopNavigationComponent, {
    providers: [UsersService]
  });
});
