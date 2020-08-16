import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { AccountsService } from './accounts.service';
import { HttpClient } from '@angular/common/http';
import { IGMailMessages, IMail } from '../interfaces/Mails';
import { tap, elementAt } from 'rxjs/operators';
import {messages} from '../mock/mails.json'
@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(
    private accountsServices: AccountsService,
    private http: HttpClient
  ) {}

  listMails() {
    // return this.http
    //   .get<{ message: IGMailMessages[] }>(
    //     `/GmailSignIn/listMessages?code=${this.accountsServices.googleAuthCode}`
    //   )
    //   .pipe(tap(this.parseMails));

    const parsedMessage=this.parseMails({messages})

    console.log('the messages>>>>>>>>',parsedMessage)
    return parsedMessage;
  }

  parseMails({ messages }: { messages: any[] }): IMail[] {
    return messages.map((e) => {
      const mailObj = {} as IMail;

      e.msg.payload.headers.forEach((element) => {
        if (element.name === 'To') {
          mailObj.to = element.value;
        } else if (element.name === 'From') {
          mailObj.from = element.value;
        }
      });

     mailObj.shortMessage=e.msg.snippet;

      return mailObj;
    }) as IMail[];
  }
}
