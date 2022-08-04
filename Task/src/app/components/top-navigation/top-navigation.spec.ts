import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TopNavigationComponent} from "./top-navigation.component";
import {UsersService} from "../../services/users.service";

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNavigationComponent],
      providers: [UsersService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
