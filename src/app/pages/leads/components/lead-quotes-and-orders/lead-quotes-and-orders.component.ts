import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-quotes-and-orders',
  templateUrl: './lead-quotes-and-orders.component.html',
  styleUrls: ['./lead-quotes-and-orders.component.scss'],
})
export class LeadQuotesAndOrdersComponent implements OnInit {
  quotes = [[], [], [], [], [], [], [], [], [], []];

  orders = [[], [], [], [], []];

  constructor() {}

  ngOnInit(): void {}
}