import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CalendarService } from '../../../../services/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  private formSumitAttempt = false;

  addEventForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private calSer: CalendarService
  ) {}

  ngOnInit(): void {}

  isFieldValid(field: string): boolean {
    return (
      (!this.addEventForm.get(field).valid &&
        this.addEventForm.get(field).touched) ||
      (this.formSumitAttempt && !this.addEventForm.get(field).valid)
    );
  }

  onSubmit() {
    this.formSumitAttempt = true;
    const val = this.addEventForm.value;

    if (this.addEventForm.valid) {
      this.calSer
        .add(val.location, 'blue', val.clientName, val.date, val.title)
        .subscribe(() => {
          this.router.navigate(['/app/calendar']);
          this.toastr.success('Calendar event added successfully', 'Success');
        });
    } else {
      this.toastr.error(
        'Please fix all the errors on form fields before submitting',
        'Form has errored'
      );
    }
  }
}
