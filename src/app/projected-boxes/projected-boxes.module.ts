import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectedBoxOneComponent } from './projected-box-one/projected-box-one.component';
import { ProjectedBoxTwoComponent } from './projected-box-two/projected-box-two.component';
import { ProjectedBoxThreeComponent } from './projected-box-three/projected-box-three.component';



@NgModule({
  declarations: [ProjectedBoxOneComponent, ProjectedBoxTwoComponent, ProjectedBoxThreeComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectedBoxesModule { }
