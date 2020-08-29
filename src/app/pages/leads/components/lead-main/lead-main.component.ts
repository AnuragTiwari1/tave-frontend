import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadsService } from 'src/app/services/leads.service';

@Component({
  selector: 'app-lead-main',
  templateUrl: './lead-main.component.html',
  styleUrls: ['./lead-main.component.css'],
})
export class LeadMainComponent {
  id: number;

  constructor(
    private route: ActivatedRoute,
    public leadServices: LeadsService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;

      this.leadServices.setLeadId(this.id);
    });
  }
}
