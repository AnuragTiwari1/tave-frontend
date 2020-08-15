import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss'],
})
export class OutboxComponent implements OnInit {
  mails = [{}, {}, {}, {}, {}, {}];
  isGoogleEnabled: boolean;

  constructor(private accountService: AccountsService, private) {}

  ngOnInit(): void {
    this.isGoogleEnabled = this.accountService.isGoogleEnabled();
  }

  enableGooglePress() {
    this.accountService.enableGoogle().subscribe((res) => {
      window.open(res.auth_url);
    });
  }
}
