import {UserDetailsEditComponent} from './user-details-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {OnlyOneErrorPipe} from "../../pipes/only-one-error.pipe";
import {UsersService} from "../../services/users.service";
import {CountriesService} from "../../services/countries.service";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {render} from "@testing-library/angular";
import {By} from "@angular/platform-browser";
import {UserRepository} from "../../repositories/user.repository";

const user: User = {
  id: 1,
  name: "Justas",
  surname: "Vitkauskas",
  dateOfBirth: new Date("2000-04-01"),
  gender: "Male",
  country: "Lithuania",
  city: "Vilnius",
  hobbies: "-",
  isOnline: true,
  email: "email@email.com",
  password: "password"
}

const userRepository: UserRepository = new UserRepository();
userRepository.setUser(user);

async function setup() {
  return await render(UserDetailsEditComponent, {
    declarations: [OnlyOneErrorPipe],
    imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
    providers: [
      {provide: UserRepository, useValue: userRepository},
      CountriesService,
      UsersService,
      AuthService
    ]
  });
}

it('should create', async () => {
  await setup();
});

it('should return correct amount of form input fields', async () => {
  const {fixture} = await setup();
  const formElement = fixture.debugElement.query(By.css('.edit-form')).nativeElement;
  const inputElements = formElement.querySelectorAll('input');
  expect(inputElements.length).toEqual(6);
})

it('initial form values should match with user values', async () => {
  const {fixture} = await setup();
  const component = fixture.componentInstance;
  const formGroup = component.form;
  const formValues = {
    name: "Justas",
    surname: "Vitkauskas",
    dateOfBirth: "2000-04-01",
    gender: "Male",
    country: "Lithuania",
    city: "Vilnius",
    hobbies: "-"
  }
  expect(formGroup.value).toEqual(formValues);
})

it('save button should be enabled', async () => {
  const {fixture} = await setup();
  const saveButton = fixture.debugElement.query(By.css('.save-button'));
  expect(saveButton.nativeElement.getAttribute('disabled')).toEqual(null);
})
