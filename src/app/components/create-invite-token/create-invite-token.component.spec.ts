import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInviteTokenComponent } from './create-invite-token.component';

describe('CreateInviteTokenComponent', () => {
  let component: CreateInviteTokenComponent;
  let fixture: ComponentFixture<CreateInviteTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInviteTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInviteTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
