import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPagerComponent } from './movies-pager.component';

describe('MoviesPagerComponent', () => {
  let component: MoviesPagerComponent;
  let fixture: ComponentFixture<MoviesPagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
