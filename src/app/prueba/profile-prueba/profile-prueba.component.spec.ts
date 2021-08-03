import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePruebaComponent } from './profile-prueba.component';

describe('ProfilePruebaComponent', () => {
  let component: ProfilePruebaComponent;
  let fixture: ComponentFixture<ProfilePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
