import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-projected-box-one',
  templateUrl: './projected-box-one.component.html',
  styleUrls: ['./projected-box-one.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectedBoxOneComponent implements OnInit,DoCheck {

  _boxOneCounter=0;
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
