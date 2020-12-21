import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipDetailsComponent } from './zip-details.component';

describe('ZipDetailsComponent', () => {
  let component: ZipDetailsComponent;
  let fixture: ComponentFixture<ZipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
