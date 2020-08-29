import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoTwoComponent } from './acuerdo-two.component';

describe('AcuerdoTwoComponent', () => {
  let component: AcuerdoTwoComponent;
  let fixture: ComponentFixture<AcuerdoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
