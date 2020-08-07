import { Component, OnInit } from '@angular/core';
import {
  Router,
  UrlTree,
  UrlSegmentGroup,
  PRIMARY_OUTLET,
  UrlSegment,
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pageName: string;
  CREATE_ACCOUNT = 'createAccount';
  FORGOT_PASSWORD = 'forgotPassword';
  SET_PASSWORD = 'setPassword';

  constructor(router: Router) {
    const tree: UrlTree = router.parseUrl(router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.pageName = s[1]?.path ?? '';
  }

  ngOnInit(): void {}

  setPageName(pageName = ''): void {
    this.pageName = pageName;
  }
}
