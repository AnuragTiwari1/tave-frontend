import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadFianncialsComponent } from './lead-fianncials.component';

describe('LeadFianncialsComponent', () => {
  let component: LeadFianncialsComponent;
  let fixture: ComponentFixture<LeadFianncialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadFianncialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadFianncialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
