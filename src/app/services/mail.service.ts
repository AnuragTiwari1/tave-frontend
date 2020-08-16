import { Injectable } from '@angular/core';
import { AccountsService } from './accounts.service';
import { HttpClient } from '@angular/common/http';
import { IGMailMessages, IMail } from '../interfaces/Mails';
import { tap, elementAt } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(
    private accountsServices: AccountsService,
    private http: HttpClient
  ) {}

  listMails() {
    return this.http
      .get<{ message: IGMailMessages[] }>(`../mock/mails.json`)
      .pipe(tap(this.parseMails));
  }

  parseMails({ message }: { message: IGMailMessages[] }): IMail[] {
    return message.map((e) => {
      const mailObj = {} as IMail;

      e.payload.headers.forEach((element) => {
        if (element.name === 'To') {
          mailObj.to = element.value;
        } else if (element.name === 'From') {
          mailObj.from = element.value;
        }
      });

      mailObj.shortMessage = e.snippet;

      return mailObj;
    }) as IMail[];
  }
}
