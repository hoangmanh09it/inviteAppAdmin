import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTokenComponent } from './invite-token.component';

describe('InviteTokenComponent', () => {
  let component: InviteTokenComponent;
  let fixture: ComponentFixture<InviteTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
