import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pageName: string;
  CREATE_ACCOUNT = 'createAccount';
  FORGOT_PASSWORD = 'forgotPassword';
  SET_PASSWORD = 'setPassword';

  constructor() {
    this.pageName = 'setPassword';
  }

  ngOnInit(): void {}
}
