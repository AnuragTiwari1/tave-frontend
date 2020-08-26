import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadScheduleComponent } from './lead-schedule.component';

describe('LeadScheduleComponent', () => {
  let component: LeadScheduleComponent;
  let fixture: ComponentFixture<LeadScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
