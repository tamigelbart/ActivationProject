import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeResultComponent } from './shoe-result.component';

describe('ShoeResultComponent', () => {
  let component: ShoeResultComponent;
  let fixture: ComponentFixture<ShoeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
