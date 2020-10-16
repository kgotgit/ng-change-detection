import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBoxComponent } from './default-box.component';

describe('DefaultBoxComponent', () => {
  let component: DefaultBoxComponent;
  let fixture: ComponentFixture<DefaultBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
