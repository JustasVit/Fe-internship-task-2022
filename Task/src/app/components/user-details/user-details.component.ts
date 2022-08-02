import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  user: User | undefined;
  private routeSub: Subscription;

  constructor(private usersService : UsersService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(){
    this.routeSub = this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.user = this.usersService.getUserById(this.userId);
      if(this.user == undefined){
        this.router.navigate(['/']);
      }
    })
  }
}
