import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedBoxOneComponent } from './projected-box-one.component';

describe('ProjectedBoxOneComponent', () => {
  let component: ProjectedBoxOneComponent;
  let fixture: ComponentFixture<ProjectedBoxOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectedBoxOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedBoxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
