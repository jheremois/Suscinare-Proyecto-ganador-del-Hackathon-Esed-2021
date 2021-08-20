import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholdComponent } from './placehold.component';

describe('PlaceholdComponent', () => {
  let component: PlaceholdComponent;
  let fixture: ComponentFixture<PlaceholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
