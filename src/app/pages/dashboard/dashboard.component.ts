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
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  pageName = 'dashboard';
  subPageName = '';

  pages = [
    {
      name: 'Dashboard',
      identifier: 'dashboard',
      route: '',
      submenu: [
        {
          name: 'Overview',
          route: 'dashboard',
          identifier: '',
        },
        {
          name: 'Agenda',
          route: '',
          identifier: 'agenda',
        },
        {
          name: 'Upcoming Tasks',
          route: '',
          identifier: 'upcoming_task',
        },
      ],
    },

    {
      name: 'Calendar',
      identifier: 'calendar',
      route: 'calendar',
      submenu: [
        {
          name: 'Events Overview',
          route: 'calendar',
          identifier: '',
        },
        {
          name: 'Add new Event',
          route: 'calendar/add_event',
          identifier: 'add_event',
        },
        {
          name: 'Upcoming Agenda',
          route: 'upcoming',
          identifier: 'calendar/upcoming',
        },
      ],
    },
    {
      name: 'Mail',
      identifier: 'mail',
      route: 'mail',
      submenu: [
        {
          name: 'Inbox',
          route: 'mail',
          identifier: '',
        },
        {
          name: 'Outbox',
          route: 'mail/outbox',
          identifier: 'outbox',
        },
        {
          name: 'Compose',
          route: 'mail/compose',
          identifier: 'compose',
        },
      ],
    },
  ];

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
