import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
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

  submit() {
    const emailControl = this.form.controls['email'];
    const passwordControl = this.form.controls['password'];
    if (this.authService.login(emailControl.value, passwordControl.value)) {
      this.router.navigate(['/']);
    } else {
      alert("Bad credentials");
    }
  }
}
