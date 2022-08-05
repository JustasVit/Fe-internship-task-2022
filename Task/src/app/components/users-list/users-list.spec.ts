import {render} from "@testing-library/angular";
import {UsersService} from "../../services/users.service";
import {NgxPaginationModule} from "ngx-pagination";
import {UsersListComponent} from "./users-list.component";

it('should create', async () => {
  await render(UsersListComponent, {
    imports: [NgxPaginationModule],
    providers: [UsersService]
  });
});
