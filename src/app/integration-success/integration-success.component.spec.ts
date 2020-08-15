import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationSuccessComponent } from './integration-success.component';

describe('IntegrationSuccessComponent', () => {
  let component: IntegrationSuccessComponent;
  let fixture: ComponentFixture<IntegrationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
