import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-projected-box-two',
  templateUrl: './projected-box-two.component.html',
  styleUrls: ['./projected-box-two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectedBoxTwoComponent implements OnInit,DoCheck {


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
