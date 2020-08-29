import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-lead-mail',
  templateUrl: './lead-mail.component.html',
  styleUrls: ['./lead-mail.component.scss'],
})
export class LeadMailComponent implements OnInit {

  mails:any[] = [];

  constructor(
    private accountService: AccountsService,
    private mailServices: MailService
  ) {}

  ngOnInit(): void {
    this.mails = this.mailServices.listMails();
  }
}
