import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxOneComponent } from './box-one/box-one.component';
import { BoxTwoComponent } from './box-two/box-two.component';
import { BoxThreeComponent } from './box-three/box-three.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [BoxOneComponent, BoxTwoComponent, BoxThreeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[BoxOneComponent, BoxTwoComponent, BoxThreeComponent],
})
export class NestedBoxesModule { }
