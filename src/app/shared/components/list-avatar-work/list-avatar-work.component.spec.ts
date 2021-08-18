import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvatarWorkComponent } from './list-avatar-work.component';

describe('ListAvatarWorkComponent', () => {
  let component: ListAvatarWorkComponent;
  let fixture: ComponentFixture<ListAvatarWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvatarWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvatarWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
