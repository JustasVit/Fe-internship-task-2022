import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {UserRepository} from "../../repositories/user.repository";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userRepository: UserRepository,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: ['',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }],
      password: ['',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }]
    })
  }

  ngOnInit() {
    this.userRepository.user$.subscribe((user) => {
      if (user !== undefined) {
        this.router.navigate(['/']);
      }
    })
  }

  submit() {
    const emailControl = this.form.controls['email'];
    const passwordControl = this.form.controls['password'];
    if (this.authService.login(emailControl.value, passwordControl.value)) {
      this.router.navigate(['/']);
    } else {
      this.form.controls['email'].setErrors({'incorrect': true});
      this.form.controls['password'].setErrors({'incorrect': true});
    }
  }
}
