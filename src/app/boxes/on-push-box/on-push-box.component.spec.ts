import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushBoxComponent } from './on-push-box.component';

describe('OnPushBoxComponent', () => {
  let component: OnPushBoxComponent;
  let fixture: ComponentFixture<OnPushBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPushBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
