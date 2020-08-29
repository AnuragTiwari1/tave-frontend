import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-lead-files',
  templateUrl: './lead-files.component.html',
  styleUrls: ['./lead-files.component.css'],
})
export class LeadFilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('main').click(function () {
      document.getElementById('file').style.marginTop = '80px';
      document.getElementById('close').style.opacity = '1';
    });
  }
}
