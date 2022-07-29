import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {Country} from "../../models/Country";
import {CountriesService} from "../../services/countries.service";
import {City} from "../../models/City";
import {createDateValidator} from "../../validators/date.validator";

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

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private countriesService: CountriesService,
              private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }], surname: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }], gender: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }], dateOfBirth: ['', {
        validators: [Validators.required, createDateValidator()], updateOn: 'blur'
      }], country: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }], city: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }], hobbies: ['', {
        validators: [Validators.required], updateOn: 'blur'
      }]
    })
  }

  ngOnInit(): void {
    this.loggedInUser = this.usersService.getLoggedInUser();
    this.countries = this.countriesService.getCountries();

    this.form.valueChanges.subscribe(values => {
      this.loggedInUser.name = values.name;
      this.loggedInUser.surname = values.surname;
      this.loggedInUser.gender = values.gender;
      this.loggedInUser.dateOfBirth = values.dateOfBirth;
      this.loggedInUser.country = values.country;
      this.loggedInUser.city = values.city;
      this.loggedInUser.hobbies = values.hobbies;

      this.cities = this.countriesService.getCities(this.loggedInUser.country);

    })
  }

  submit() {
    this.usersService.updateUser(this.loggedInUser);
    this.router.navigate(['/details']);
  }
}
