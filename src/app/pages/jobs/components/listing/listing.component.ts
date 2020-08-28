import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/services/leads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  grid = false;

  jobList: any = [];

  constructor(private leadService: LeadsService, private router: Router) {}

  ngOnInit(): void {
    this.leadService.getAllLeads().subscribe((data) => {
      this.jobList = data.data;
    });
  }

  toggleLayout = () => {
    this.grid = !this.grid;
  };

  handleJobClick(id) {
    console.log('the button is clicked');
    this.router.navigateByUrl(`/app/leads?id=${id}`);
  }
}
