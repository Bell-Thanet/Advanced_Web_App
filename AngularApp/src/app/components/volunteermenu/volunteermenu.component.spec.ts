import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteermenuComponent } from './volunteermenu.component';

describe('VolunteermenuComponent', () => {
  let component: VolunteermenuComponent;
  let fixture: ComponentFixture<VolunteermenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteermenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
