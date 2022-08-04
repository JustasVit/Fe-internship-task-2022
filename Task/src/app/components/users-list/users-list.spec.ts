import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersListComponent} from "./users-list.component";
import {UsersService} from "../../services/users.service";
import {NgxPaginationModule} from "ngx-pagination";

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [NgxPaginationModule],
      providers: [UsersService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
