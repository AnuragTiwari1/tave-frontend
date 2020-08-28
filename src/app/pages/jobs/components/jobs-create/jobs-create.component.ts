import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LeadsService } from '../../../../services/leads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.scss'],
})
export class JobsCreateComponent implements OnInit {
  formSumitAttempt: boolean;

  jobsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    brand: new FormControl('', [Validators.required]),
    jobType: new FormControl('', [Validators.required]),
    jobDate: new FormControl('', [Validators.required]),

    rating: new FormControl(3, [Validators.required]),
    confidence: new FormControl('Medium', [Validators.required]),
    decideBy: new FormControl('', [Validators.required]),
    maxBudget: new FormControl('', [Validators.required]),
    source: new FormControl('', [Validators.required]),

    leadNote: new FormControl('', [Validators.required]),

    stage: new FormControl('Lead', [Validators.required]),
    leadInquiredOn: new FormControl('', [Validators.required]),
    bookedOn: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastr: ToastrService,
    private leadServices: LeadsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isFieldValid(field: string): boolean {
    return (
      (!this.jobsForm.get(field).valid && this.jobsForm.get(field).touched) ||
      (this.formSumitAttempt && !this.jobsForm.get(field).valid)
    );
  }
  onSubmit() {
    this.formSumitAttempt = true;
    const val = this.jobsForm.value;
    this.leadServices.createLeads(val).subscribe(() => {
      this.router.navigate(['/app/jobs']);
    });
    // if (this.jobsForm.valid) {
    //   this.leadServices.createLeads(val).subscribe(() => {
    //     this.router.navigate(['/app/leads']);
    //   });
    // } else {
    //   console.log(this.jobsForm.errors, val);
    //   this.toastr.error(
    //     'Please fill all the fields before submitting',
    //     'Form has errored'
    //   );
    // }
  }
}
