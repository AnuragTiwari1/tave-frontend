import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';
import { MailService } from 'src/app/services/mail.service';
import { IMail } from 'src/app/interfaces/Mails';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss'],
})
export class OutboxComponent implements OnInit {
  mails:any[] = [];
  isGoogleEnabled: boolean;

  authCode = '';

  constructor(
    private accountService: AccountsService,
    private mailServices: MailService
  ) {}

  ngOnInit(): void {
    this.isGoogleEnabled = this.accountService.isGoogleEnabled();

    if (this.isGoogleEnabled) {
      this.mailServices.listMails().subscribe((res) => {
        this.mails = res.message;
      });

      this.authCode = this.accountService.googleAuthCode;
    }
  }

  enableGooglePress() {
    this.accountService.enableGoogle().subscribe((res) => {
      window.open(res.auth_url);
    });
  }
}
