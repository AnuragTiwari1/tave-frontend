import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadMainComponent } from './lead-main.component';

describe('LeadMainComponent', () => {
  let component: LeadMainComponent;
  let fixture: ComponentFixture<LeadMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
