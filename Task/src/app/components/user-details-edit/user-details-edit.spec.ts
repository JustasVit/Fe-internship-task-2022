import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsEditComponent} from './user-details-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {OnlyOneErrorPipe} from "../../pipes/only-one-error.pipe";
import {UsersService} from "../../services/users.service";
import {CountriesService} from "../../services/countries.service";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {By} from "@angular/platform-browser";

describe('UserDetailsEditComponent', () => {
  let component: UserDetailsEditComponent;
  let fixture: ComponentFixture<UserDetailsEditComponent>;
  let userServiceStub: Partial<UsersService>;

  beforeEach(async () => {

    userServiceStub = {
      getUserById(id: number): User | undefined {
        return {
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
      }
    };

    await TestBed.configureTestingModule({
      declarations: [UserDetailsEditComponent, OnlyOneErrorPipe],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{provide: UsersService, useValue: userServiceStub}, CountriesService, AuthService]
    })
      .compileComponents();

    sessionStorage.setItem('id', '1');

    fixture = TestBed.createComponent(UserDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct amount of form input fields', () => {
    const formElement = fixture.debugElement.query(By.css('.edit-form')).nativeElement;
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(6);
  })

  it('initial form values should match with user values', () => {
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

  it('save button should be enabled', () => {
    const saveButton = fixture.debugElement.query(By.css('.save-button'));
    expect(saveButton.nativeElement.getAttribute('disabled')).toEqual(null);
  })

  it('save button should be disabled', () => {
    component.form.controls['name'].setValue('justas');
    fixture.detectChanges();
    const saveButton = fixture.debugElement.query(By.css('.save-button'));
    expect(saveButton.nativeElement.getAttribute('disabled')).toEqual('');
  })

  it('name input should be invalid', () => {
    component.form.controls['name'].setValue('justas');
    fixture.detectChanges();
    expect(component.form.controls['name'].valid).toBeFalsy();
  })

  it('surname input should be invalid', () => {
    component.form.controls['surname'].setValue('vitkauskas');
    fixture.detectChanges();
    expect(component.form.controls['surname'].valid).toBeFalsy();
  })

  it('gender input should be invalid', () => {
    component.form.controls['gender'].setValue('');
    fixture.detectChanges();
    expect(component.form.controls['gender'].valid).toBeFalsy();
  })

  it('dateOfBirth input should be invalid', () => {
    component.form.controls['dateOfBirth'].setValue('2022-04-01');
    fixture.detectChanges();
    expect(component.form.controls['dateOfBirth'].valid).toBeFalsy();
  })

  it('country input should be invalid', () => {
    component.form.controls['country'].setValue('');
    fixture.detectChanges();
    expect(component.form.controls['country'].valid).toBeFalsy();
  })

  it('city input should be invalid', () => {
    component.form.controls['city'].setValue('');
    fixture.detectChanges();
    expect(component.form.controls['city'].valid).toBeFalsy();
  })
});
