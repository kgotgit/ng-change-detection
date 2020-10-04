import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedBoxTwoComponent } from './projected-box-two.component';

describe('ProjectedBoxTwoComponent', () => {
  let component: ProjectedBoxTwoComponent;
  let fixture: ComponentFixture<ProjectedBoxTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectedBoxTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedBoxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
