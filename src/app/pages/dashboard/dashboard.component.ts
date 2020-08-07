import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  Router,
  UrlTree,
  UrlSegmentGroup,
  PRIMARY_OUTLET,
  UrlSegment,
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pageName = 'dashboard';
  subPageName = '';

  constructor(router: Router) {
    const tree: UrlTree = router.parseUrl(router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.pageName = s[1]?.path ?? 'dashboard';
    this.subPageName = s[2]?.path ?? '';
  }

  ngOnInit(): void {
    //Toggle Click Function
    $('#menu-toggle').click(function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }

  setPageName(pageName = 'dashboard'): void {
    this.pageName = pageName;
  }

  setSubPageName(subPageName = ''): void {
    this.subPageName = subPageName;
  }
}
