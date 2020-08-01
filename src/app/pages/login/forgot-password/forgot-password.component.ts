import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  filmIcon = faFilm;

  forgotPasswordForm = new FormGroup({
    email: new FormControl(''),
  });


  constructor() {}

  ngOnInit(): void {}
}
