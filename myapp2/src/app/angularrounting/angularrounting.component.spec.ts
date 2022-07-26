import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularrountingComponent } from './angularrounting.component';

describe('AngularrountingComponent', () => {
  let component: AngularrountingComponent;
  let fixture: ComponentFixture<AngularrountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularrountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularrountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
