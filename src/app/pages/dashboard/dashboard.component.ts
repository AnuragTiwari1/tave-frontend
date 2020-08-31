import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  Router,
  UrlTree,
  UrlSegmentGroup,
  PRIMARY_OUTLET,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AccountsService } from '../../services/accounts.service';

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
      iconClass: 'fa fa-tachometer',
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
      iconClass: 'fa fa-calendar',
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
          route: 'calendar/events',
          identifier: 'events',
        },
      ],
    },
    {
      name: 'Mail',
      identifier: 'mail',
      route: 'mail',
      iconClass: 'fa fa-paper-plane',
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
    {
      name: 'Leads',
      identifier: 'leads',
      route: 'leads/create',
      iconClass: 'fa fa-industry',
      submenu: [
        {
          name: 'New Leads',
          route: 'leads/create',
          identifier: '',
        },
      ],
    },
    {
      name: 'Jobs',
      identifier: 'jobs',
      route: 'jobs',
      iconClass: 'fa fa-briefcase',
      submenu: [
        {
          name: 'Confirmed Jobs',
          route: 'jobs',
          identifier: '',
        },
        {
          name: 'New Booked Job',
          route: 'jobs/create',
          identifier: 'create',
        },
      ],
    },

    {
      name: 'Quotes and Orders',
      identifier: 'qao',
      route: 'jobs',
      iconClass: 'fa fa-file-text-o',
      submenu: [
        {
          name: 'Select Job',
          route: 'qao',
          identifier: '',
        },
      ],
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    //Toggle Click Function
    $('#menu-toggle').click(function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });

    const tree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.pageName = s[1]?.path ?? 'dashboard';
    this.subPageName = s[2]?.path ?? '';

    //get all the registered accounts for user

    // this.accountServices.getAccounts().subscribe()
  }

  setPageName(pageName = 'dashboard'): void {
    this.pageName = pageName;
  }

  setSubPageName(subPageName = ''): void {
    this.subPageName = subPageName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
