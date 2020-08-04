import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractFormsInterface } from '../../../interfaces/AbstractFormsInterface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit, AbstractFormsInterface {
  formSumitAttempt: boolean;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  isFieldValid(field: string): boolean {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field),
    };
  }

  onSubmit(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.formSumitAttempt = true;
    if (this.loginForm.valid) {
      console.log('form submitted');
    }
  }
}
