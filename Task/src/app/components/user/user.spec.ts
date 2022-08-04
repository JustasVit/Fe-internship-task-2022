import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserComponent} from "./user.component";
import {User} from "../../models/User";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
