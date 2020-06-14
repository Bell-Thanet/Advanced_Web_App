import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirstaidComponent } from './add-firstaid.component';

describe('AddFirstaidComponent', () => {
  let component: AddFirstaidComponent;
  let fixture: ComponentFixture<AddFirstaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFirstaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirstaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
