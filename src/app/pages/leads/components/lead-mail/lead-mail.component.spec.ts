import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadMailComponent } from './lead-mail.component';

describe('LeadMailComponent', () => {
  let component: LeadMailComponent;
  let fixture: ComponentFixture<LeadMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
