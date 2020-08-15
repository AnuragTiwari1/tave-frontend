import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAccounts } from '../interfaces/Accounts';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  googleAccount: boolean;
  microsoftAccount: boolean;

  constructor(private http: HttpClient) {}

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
    return this.http
      .get<{ message: string }>(`/GmailSignIn/listMessages?code=${authCode}`)
      .pipe(
        tap(() => {
          this.googleAccount = true;
        })
      );
  }
}
