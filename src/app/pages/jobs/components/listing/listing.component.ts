import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  grid = false;

  jobList = [{}, {}, {}];

  constructor() {}

  ngOnInit(): void {}

  toggleLayout = () => {
    this.grid = !this.grid;
  };
}
