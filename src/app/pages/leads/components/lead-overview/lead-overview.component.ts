import { Component, OnInit } from '@angular/core';

export interface IContactOverView {
  name: string;
  companyName: string;
  phone: string;
  leadSource: string;
  jobDate: Date;
  jobType: string;
  leadStatus: string;
  notes: string;
}
@Component({
  selector: 'app-lead-overview',
  templateUrl: './lead-overview.component.html',
  styleUrls: ['./lead-overview.component.scss'],
})
export class LeadOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
