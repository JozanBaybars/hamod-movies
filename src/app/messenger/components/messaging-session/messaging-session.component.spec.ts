import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingSessionComponent } from './messaging-session.component';

describe('MessagingSessionComponent', () => {
  let component: MessagingSessionComponent;
  let fixture: ComponentFixture<MessagingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
