import {createState, Store} from "@ngneat/elf";
import {deleteAllEntities, selectFirst, setEntities, withEntities} from "@ngneat/elf-entities";
import {User} from "../models/User";
import {Injectable} from "@angular/core";

const {state, config} = createState(
  withEntities<User>()
);

const store = new Store({name: 'user', state, config});

@Injectable({providedIn: 'root'})
export class UserRepository {
  user$ = store.pipe(selectFirst());

  setUser(user: User) {
    store.update(setEntities([user]));
  }

  clear() {
    store.update(deleteAllEntities());
  }
}
