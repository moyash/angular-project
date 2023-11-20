import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('called login component');
  }

  login() {
    console.log('before login', this.authService.isLoggedIn);

    this.authService.login().subscribe((state) => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/main']);
      }
    });
    console.log('after login', this.authService.isLoggedIn);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
