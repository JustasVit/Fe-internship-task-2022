import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  @Input() user: User;
  imageLink: string;

  ngOnInit(){
    this.imageLink = "https://picsum.photos/200?random=" + this.user.id;
  }
}
