import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAccounts } from '../interfaces/Accounts';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  googleAccount: boolean;
  microsoftAccount: boolean;
  googleAuthCode?: string;

  constructor(private http: HttpClient, private router: Router) {}

  getAccounts() {
    return this.http.get<IAccounts>('/accounts').pipe(tap(this.setAccounts));
  }

  setAccounts(accounts: IAccounts) {
    this.googleAccount = accounts.google;
    this.microsoftAccount = accounts.microsoft;
  }

  isGoogleEnabled() {
    return this.googleAccount;
  }

  isMicrosoftEnabled() {
    return this.microsoftAccount;
  }

  enableGoogle() {
    return this.http.get<{ auth_url: string }>('/GmailSignIn/enableGmail');
  }

  saveAuthCode(authCode: string) {
    console.log('the code i got is >>>>>>>>>>>>>>>>', authCode);
    this.googleAuthCode = authCode;
    this.router.navigate(['/app/mail']);
    this.googleAccount = true;
  }
}
