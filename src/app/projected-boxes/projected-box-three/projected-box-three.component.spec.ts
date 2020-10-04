import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedBoxThreeComponent } from './projected-box-three.component';

describe('ProjectedBoxThreeComponent', () => {
  let component: ProjectedBoxThreeComponent;
  let fixture: ComponentFixture<ProjectedBoxThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectedBoxThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedBoxThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
