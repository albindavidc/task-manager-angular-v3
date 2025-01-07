import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: { email: string; password: string }[] = [];

  signup(user: { email: string; password: string }): Observable<string> {
    this.users.push(user);
    return of('Successfully created the user');
  }

  login(credentials: { email: string; password: string }): Observable<string> {
    const user = this.users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );
    return user ? of('User have successfully logined') : of('There is no user');
  }
}
