import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractFormsInterface } from '../../../interfaces/AbstractFormsInterface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

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

  constructor(
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  isFieldValid(field: string): boolean {
    return (
      !this.loginForm.get(field).valid && this.loginForm.get(field).touched
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field),
    };
  }

  onSubmit(): void {
    this.formSumitAttempt = true;
    const val = this.loginForm.value;

    if (this.loginForm.valid) {
      this.authService.login(val.email, val.password).subscribe(() => {
        console.log('User is logged in');
      });
    } else {
      this.toastr.error(
        'Please fix all the errors on form fields before submitting',
        'Form has errored'
      );
    }
  }
}
