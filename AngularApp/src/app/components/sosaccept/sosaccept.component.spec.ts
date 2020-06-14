import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosacceptComponent } from './sosaccept.component';

describe('SosacceptComponent', () => {
  let component: SosacceptComponent;
  let fixture: ComponentFixture<SosacceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosacceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
