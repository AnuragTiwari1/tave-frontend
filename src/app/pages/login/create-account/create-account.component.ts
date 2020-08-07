import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AbstractFormsInterface } from '../../../interfaces/AbstractFormsInterface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
})
export class CreateAccountComponent implements OnInit, AbstractFormsInterface {
  formSumitAttempt: boolean;
  form: FormGroup;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  isFieldValid(field: string): boolean {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.formSumitAttempt && !this.form.get(field).valid)
    );
  }

  onSubmit(): void {
    this.formSumitAttempt = true;
    const val = this.form.value;

    if (this.form.valid && val.password === val.cpassword) {
      this.authService
        .createAccount(val.name, val.email, val.password)
        .subscribe(() => {
          this.toastr.success(
            'Your Account has been successfully created',
            'Account created'
          );
          this.router.navigate(['/login']);
        });
    } else {
      this.toastr.error(
        'Please fix all the errors on form fields before submitting',
        'Form has errored'
      );
    }
  }
}
