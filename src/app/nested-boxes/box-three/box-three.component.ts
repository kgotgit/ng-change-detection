import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BoxThreeComponent implements OnInit, DoCheck {

  _boxOneCounter=0;


  @Input()
  set boxOneCounter(counter){
    this._boxOneCounter=counter;
    console.log("from Box Two to Three =>"+counter);
  }
  constructor(public boxService:BoxService) { }


  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log("doCheck");
  }

}
