import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-integration-success',
  templateUrl: './integration-success.component.html',
  styleUrls: ['./integration-success.component.css'],
})
export class IntegrationSuccessComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountsService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParams.code;
    this.accountService.saveAuthCode(code);
  }
}
