import {render} from "@testing-library/angular";
import {TopNavigationComponent} from "../top-navigation/top-navigation.component";
import {UsersService} from "../../services/users.service";

it('should create', async () => {
  await render(TopNavigationComponent, {
    providers: [UsersService]
  });
});
