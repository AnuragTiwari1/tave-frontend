import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-fianncials',
  templateUrl: './lead-fianncials.component.html',
  styleUrls: ['./lead-fianncials.component.scss'],
})
export class LeadFianncialsComponent implements OnInit {
  quotes = [[], [], [], [], [], [], [], [], [], []];

  constructor() {}

  ngOnInit(): void {}
}
