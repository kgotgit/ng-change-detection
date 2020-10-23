import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-projected-box-three',
  templateUrl: './projected-box-three.component.html',
  styleUrls: ['./projected-box-three.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectedBoxThreeComponent implements OnInit,DoCheck {


  constructor(public boxService:BoxService) { }


  ngOnInit(): void {
  }

  increment(){
    this.boxService.increment();
  }


  ngDoCheck(): void {
    console.log("doCheck");
  }

}
