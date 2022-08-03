import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import {Country} from "../../models/Country";
import {CountriesService} from "../../services/countries.service";
import {City} from "../../models/City";
import {createDateValidator} from "../../validators/date.validator";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.scss']
})
export class UserDetailsEditComponent implements OnInit {

  loggedInUser: User;
  countries: Country[];
  cities: City[] | undefined;
  form: FormGroup;
  displayStyle = "none";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private usersService: UsersService, private countriesService: CountriesService, private router: Router) {

    this.form = this.formBuilder.group({
      name: [null, {
        validators: [Validators.required, Validators.maxLength(20), Validators.pattern("[A-Z][a-z]+")], updateOn: 'blur'
      }], surname: [null, {
        validators: [Validators.required, Validators.maxLength(20), Validators.pattern("[A-Z][a-z]+")], updateOn: 'blur'
      }], gender: [null, {
        validators: [Validators.required], updateOn: 'blur'
      }], dateOfBirth: [null, {
        validators: [Validators.required, createDateValidator()], updateOn: 'blur'
      }], country: [null, {
        validators: [Validators.required], updateOn: 'blur'
      }], city: [null, {
        validators: [Validators.required], updateOn: 'blur'
      }], hobbies: [null, {updateOn: 'blur'}]
    })
  }

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    user === undefined ? this.router.navigate(['/error']) : this.loggedInUser = user;
    this.countries = this.countriesService.getCountries();
    this.cities = this.countriesService.getCities(this.loggedInUser.country);

    this.form.patchValue({
      name: this.loggedInUser.name,
      surname: this.loggedInUser.surname,
      gender: this.loggedInUser.gender,
      dateOfBirth: this.loggedInUser.dateOfBirth.toISOString().split('T')[0],
      country: this.loggedInUser.country,
      city: this.loggedInUser.city,
      hobbies: this.loggedInUser.hobbies
    })

    this.form.valueChanges.subscribe(values => {
      this.loggedInUser.name = values.name;
      this.loggedInUser.surname = values.surname;
      this.loggedInUser.gender = values.gender;
      this.loggedInUser.dateOfBirth = new Date(values.dateOfBirth);
      this.loggedInUser.country = values.country;
      this.loggedInUser.city = values.city;
      this.loggedInUser.hobbies = values.hobbies;
    })

    this.form.controls['country'].valueChanges.subscribe(value => {
      this.cities = this.countriesService.getCities(value);
      this.form.patchValue({
        city: null
      })
    })
  }

  submit() {
    this.usersService.updateUser(this.loggedInUser, this.loggedInUser.id);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }

  openPopup() {
    this.displayStyle = "block";
  }
}
