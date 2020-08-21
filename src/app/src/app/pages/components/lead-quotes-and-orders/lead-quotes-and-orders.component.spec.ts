import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadQuotesAndOrdersComponent } from './lead-quotes-and-orders.component';

describe('LeadQuotesAndOrdersComponent', () => {
  let component: LeadQuotesAndOrdersComponent;
  let fixture: ComponentFixture<LeadQuotesAndOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadQuotesAndOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadQuotesAndOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
