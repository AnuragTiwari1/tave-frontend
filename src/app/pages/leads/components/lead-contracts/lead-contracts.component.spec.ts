import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadContractsComponent } from './lead-contracts.component';

describe('LeadContractsComponent', () => {
  let component: LeadContractsComponent;
  let fixture: ComponentFixture<LeadContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
