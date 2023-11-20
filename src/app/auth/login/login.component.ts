import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // ログインフォーム
  loginForm = new FormGroup({
    loginId: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('called login component');
  }

  login() {
    console.log('before login', this.authService.isLoggedIn);
    console.log(this.loginForm.value);

    this.authService.login().subscribe((state) => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/main']);
      }
    });
    console.log('after login', this.authService.isLoggedIn);
  }

  get getLoginIdInValid() {
    // return true;
    return (
      !this.loginForm.get('loginId')?.valid &&
      this.loginForm.get('loginId')?.touched
    );
  }

  get getPasswordInValid() {
    return (
      !this.loginForm.get('password')?.valid &&
      this.loginForm.get('password')?.touched
    );
  }
}
