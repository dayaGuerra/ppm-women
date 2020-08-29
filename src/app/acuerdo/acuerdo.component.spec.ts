import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoComponent } from './acuerdo.component';

describe('AcuerdoComponent', () => {
  let component: AcuerdoComponent;
  let fixture: ComponentFixture<AcuerdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
