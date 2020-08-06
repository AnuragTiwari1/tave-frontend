import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface ILogin {
  auth_token?: string;
  expires_at?: string; //date string
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.http
      .post<ILogin>('/User/login', formData)
      .pipe(tap(this.setSession));
  }

  createAccount(name: string, email: string, password: string) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    return this.http.post<{ message: string }>('/User/signup', formData);
  }

  private setSession(authResult: ILogin) {
    localStorage.setItem('id_token', authResult.auth_token);
    localStorage.setItem(
      'expires_at',
      moment(new Date()).add(1, 'months').toISOString()
    );
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
    return moment(expiration);
  }

  getAuthorizationToken() {
    return localStorage.getItem('id_token');
  }
}
