import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/services/leads.service';

@Component({
  selector: 'app-lead-schedule',
  templateUrl: './lead-schedule.component.html',
  styleUrls: ['./lead-schedule.component.scss'],
})
export class LeadScheduleComponent implements OnInit {
  constructor(public leadsServices: LeadsService) {
  }

  ngOnInit(): void {

  }
}
