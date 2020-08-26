import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadQuestionnairesComponent } from './lead-questionnaires.component';

describe('LeadQuestionnairesComponent', () => {
  let component: LeadQuestionnairesComponent;
  let fixture: ComponentFixture<LeadQuestionnairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadQuestionnairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadQuestionnairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
