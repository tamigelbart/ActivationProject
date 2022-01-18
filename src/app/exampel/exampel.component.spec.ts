import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampelComponent } from './exampel.component';

describe('ExampelComponent', () => {
  let component: ExampelComponent;
  let fixture: ComponentFixture<ExampelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
