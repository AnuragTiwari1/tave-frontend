import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTasksComponent } from './lead-tasks.component';

describe('LeadTasksComponent', () => {
  let component: LeadTasksComponent;
  let fixture: ComponentFixture<LeadTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
