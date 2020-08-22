import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadFilesComponent } from './lead-files.component';

describe('LeadFilesComponent', () => {
  let component: LeadFilesComponent;
  let fixture: ComponentFixture<LeadFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
