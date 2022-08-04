import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserDetailsComponent} from "./user-details.component";
import {UsersService} from "../../services/users.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      imports: [RouterTestingModule],
      providers: [UsersService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
