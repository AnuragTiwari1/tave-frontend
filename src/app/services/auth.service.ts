import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface ILogin {
  token?: string;
  expiresAt?: number;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<ILogin>('/auth/login', { email, password })
      .pipe(tap(this.setSession));
  }

  private setSession(authResult: ILogin) {
    const expiresAt = moment().add(authResult.expiresAt, 'second');

    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getAuthorizationToken() {
    return localStorage.getItem('id_token');
  }
}
