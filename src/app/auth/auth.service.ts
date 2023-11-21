import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(0),
      tap(() => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  constructor() {}
}
