import { Injectable } from '@angular/core';
import { AccountsService } from './accounts.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(
    private accountsServices: AccountsService,
    private http: HttpClient
  ) {}

  listMails() {
    return this.http.get<{ message: any }>(
      `/GmailSignIn/listMessages?code=${this.accountsServices.googleAuthCode}`
    );
  }
}
