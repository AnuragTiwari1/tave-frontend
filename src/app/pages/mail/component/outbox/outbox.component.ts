import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss'],
})
export class OutboxComponent implements OnInit {
  mails = [{}, {}, {}, {}, {}, {}];

  constructor() {}

  ngOnInit(): void {}
}
