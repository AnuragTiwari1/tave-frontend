import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  addEventForm = new FormGroup({
    title: new FormControl(),
    date: new FormControl(),
    location: new FormControl(),
    type: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
